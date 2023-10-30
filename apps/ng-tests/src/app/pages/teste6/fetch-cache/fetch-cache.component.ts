import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../pokemons/pokemon-list/pokemon-list.component';
import { PokemonService } from '../poke-service.service';
import { Observable, tap } from 'rxjs';
import { Pokemon } from '../pokemons/pokemon.interface';

@Component({
  selector: 'tst-workspace-fetch-cache',
  standalone: true,
  imports: [CommonModule, PokemonListComponent],
  templateUrl: './fetch-cache.component.html',
  styleUrls: ['./fetch-cache.component.scss'],
})
export class FetchCacheComponent implements OnInit {
  pokemons$: Observable<Pokemon[]> = this.pokeSrv.getPokemonsCache(50, 0);
  constructor(private pokeSrv: PokemonService) {}

  ngOnInit() {}
}
