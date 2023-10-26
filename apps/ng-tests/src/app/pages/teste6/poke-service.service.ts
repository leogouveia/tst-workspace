import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Pokemon } from './pokemons/pokemon.interface';
import { BehaviorSubject, Observable, firstValueFrom, map, of } from 'rxjs';
import {
  UseQuery,
  UsePersistedQuery,
  queryOptions,
  PersistedQueryService,
  QueryClientService,
} from '@ngneat/query';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly useQuery = inject(UseQuery);
  private readonly persistedQueryService = inject(PersistedQueryService);
  private readonly queryClient = inject(QueryClientService);
  private readonly usePersistedQuery = inject(UsePersistedQuery);

  baseUrl = 'http://localhost:3000';
  pokemonsBs = new BehaviorSubject<Pokemon[]>([]);
  pokemons$ = this.pokemonsBs.asObservable();

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
    // .pipe(
    //   map((pokemons) => {
    //     window.localStorage.setItem(
    //       'pokemons--stg',
    //       JSON.stringify(pokemons)
    //     );
    //     return pokemons;
    //   })
    // );
  }

  getPokemonsBs(size = 10, offset = 0) {
    return this.getPokemons(size, offset).subscribe((pokemons) => {
      this.pokemonsBs.next(pokemons);
    });
  }

  // queryPokemons(size = 10, offset = 0) {
  //   return this.useQuery(
  //     ['pokemons', { size, offset }],
  //     () => this.getPokemons(size, offset),
  //     {
  //       cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  //       staleTime: 2000,
  //       retry: 0,
  //     }
  //   );
  // }

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
      });
    }
  );

  prefetch(page: number) {
    console.log('PREFETCHING', page);
    return this.queryClient.prefetchQuery(['pokemons', page], () => {
      return firstValueFrom(this.fetchPokemon(page));
    });
  }
}
