import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../poke-service.service';
import { Pokemon } from '../pokemons/pokemon.interface';
import { PokemonListComponent } from '../pokemons/pokemon-list/pokemon-list.component';

@Component({
  selector: 'tst-workspace-fetch-comp',
  templateUrl: './fetch-comp.component.html',
  styleUrls: ['./fetch-comp.component.scss'],
  standalone: true,
  imports: [CommonModule, PokemonListComponent],
})
export class FetchCompComponent implements OnInit {
  protected pokemons: Pokemon[] = [];

  constructor(private pokeSrv: PokemonService) {}

  ngOnInit(): void {
    this.pokeSrv.getPokemons(50, 0).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
