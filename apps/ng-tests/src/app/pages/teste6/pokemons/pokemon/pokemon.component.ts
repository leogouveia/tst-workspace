import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  @Input() imageUrl = '';
  @Input() name = '';
  @Input() weight = 0;
  @Input() height = 0;
  @Input() abilities: string[] = [];
  @Input() types: string[] = [];

  get abilitiesList() {
    return this.abilities.join(', ');
  }
}
