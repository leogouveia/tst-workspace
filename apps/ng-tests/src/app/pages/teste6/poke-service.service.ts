import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CacheBucket, HttpCacheManager, withCache } from '@ngneat/cashew';
import {
  PersistedQueryService,
  QueryClientService,
  UsePersistedQuery,
  UseQuery,
  queryOptions,
} from '@ngneat/query';
import {
  BehaviorSubject,
  ReplaySubject,
  firstValueFrom,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Pokemon } from './pokemons/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly useQuery = inject(UseQuery);
  private readonly persistedQueryService = inject(PersistedQueryService);
  private readonly queryClient = inject(QueryClientService);
  private readonly usePersistedQuery = inject(UsePersistedQuery);
  private readonly manager = inject(HttpCacheManager);

  baseUrl = 'http://localhost:3000';
  pokemonsBs = new BehaviorSubject<Pokemon[]>([]);
  pokemons$ = this.pokemonsBs.asObservable();

  cashewBucket = new CacheBucket();
  testeCashew = new ReplaySubject<{ size: number; offset: number }>();

  pokemonsCashew$ = this.testeCashew.asObservable().pipe(
    switchMap(({ size, offset }) => {
      console.log('pokemonsCashew$', { size, offset });
      return this.http.get<Pokemon[]>(
        `${this.baseUrl}/pokemons?size=${size}&offset=${offset}`,
        {
          context: withCache({
            version: 'v1',
            key: 'pokemons-ksw',
            bucket: this.cashewBucket,
            ttl: 1000 * 60,
          }),
        }
      );
    }),
    tap(() => console.log('after switchMap'))
  );

  constructor() {
    this.queryClient.setDefaultOptions({
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 2000,
        retry: 0,
      },
    });
  }

  getPokemons(size = 10, offset = 0) {
    return this.http.get<Pokemon[]>(
      `${this.baseUrl}/pokemons?size=${size}&offset=${offset}`
    );
  }

  getPokemonsBs(size = 10, offset = 0, cache = false) {
    return this.getPokemons(size, offset).subscribe((pokemons) => {
      this.pokemonsBs.next(pokemons);
    });
  }

  getPokemons2(size = 10, offset = 0) {
    const localStorageValue = window.localStorage.getItem('pokemons--stg');
    if (localStorageValue) {
      this.getPokemons(size, offset).subscribe();
      return of(JSON.parse(localStorageValue));
    }
    return this.getPokemons(size, offset);
  }

  fetchPokemon(nextPage: number) {
    console.log('nextPage', nextPage);
    const page = nextPage || 0;
    const size = 20;
    const offset = page === 0 ? 0 : page * size;
    return this.getPokemons(size, offset);
  }

  queryPokemonsWithStorage = this.usePersistedQuery(
    (queryKey: ['pokemons', number]) => {
      return queryOptions({
        queryKey,
        queryFn: ({ queryKey }) => {
          const [, page] = queryKey;
          console.log('queryfn');
          return this.fetchPokemon(page);
        },
        cacheTime: 1000 * 60 * 2,
      });
    }
  );

  prefetch(page: number) {
    console.log('PREFETCHING', page);
    return this.queryClient.prefetchQuery(['pokemons', page], () => {
      return firstValueFrom(this.fetchPokemon(page));
    });
  }

  getPokemonWithCashew(size = 10, offset = 0) {
    this.testeCashew.next({ size, offset });
    console.log('getPokemonWithCashew');
    return this.pokemonsCashew$;
  }

  invalidateCashew(size = 10, offset = 0) {
    this.manager.delete(this.cashewBucket);
    this.testeCashew.next({ size, offset });
  }
}
