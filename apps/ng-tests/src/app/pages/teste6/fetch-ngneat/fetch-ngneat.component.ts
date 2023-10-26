import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../poke-service.service';
import { PokemonListComponent } from '../pokemons/pokemon-list/pokemon-list.component';
import { SubscribeDirective } from '@ngneat/subscribe';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'tst-workspace-fetch-ngneat',
  standalone: true,
  imports: [CommonModule, PokemonListComponent, SubscribeDirective],
  templateUrl: './fetch-ngneat.component.html',
  styleUrls: ['./fetch-ngneat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FetchNgneatComponent {
  pokeService = inject(PokemonService);
  // pokemons$ = this.pokeService.queryPokemons(0, 5).result$;

  // persistedPokemons$ = this.pokeService.queryPokemonsWithStorage([
  //   'pokemons',
  //   { size: 30, offset: 50 },
  // ]).result$;

  private page = new BehaviorSubject(0);
  page$ = this.page.asObservable();
  pokemons$ = this.page$.pipe(
    switchMap((page) =>
      this.pokeService
        .queryPokemonsWithStorage(['pokemons', page])
        .result$.pipe(
          tap((result) => {
            console.log('prefetch');
            this.pokeService.prefetch(page + 1);
          })
        )
    )
  );

  nextPage() {
    this.page.next(this.page.getValue() + 1);
  }

  prevPage() {
    this.page.next(this.page.getValue() - 1);
  }

  trackBy(_: number, pokemon: { name: string }) {
    return pokemon.name;
  }
}
