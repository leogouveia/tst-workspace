import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../poke-service.service';
import { PokemonListComponent } from '../pokemons/pokemon-list/pokemon-list.component';

@Component({
  selector: 'tst-workspace-fetch-service',
  standalone: true,
  imports: [CommonModule, PokemonListComponent],
  templateUrl: './fetch-service.component.html',
  styleUrls: ['./fetch-service.component.scss'],
})
export class FetchServiceComponent {
  pokemons$ = this.pokeSrv.pokemons$;

  constructor(public pokeSrv: PokemonService) {}

  ngOnInit(): void {
    this.pokeSrv.getPokemonsBs(50, 30);
  }
}
