import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { PokemonService } from '../poke-service.service';
import { PokemonListComponent } from '../pokemons/pokemon-list/pokemon-list.component';

@Component({
  selector: 'tst-workspace-fetch-cashew',
  standalone: true,
  imports: [CommonModule, PokemonListComponent],
  templateUrl: './fetch-cashew.component.html',
  styleUrls: ['./fetch-cashew.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FetchCashewComponent {
  private readonly pokeService = inject(PokemonService);
  protected loading = true;
  size = 30;
  offset = 5;
  pokemons$ = this.pokeService
    .getPokemonWithCashew(this.size, this.offset)
    .pipe(tap(() => (this.loading = false)));

  invalidateCache() {
    this.loading = true;
    this.pokeService.invalidateCashew(this.size, this.offset);
  }
}
