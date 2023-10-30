import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-route-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <li class="p-0 m-0">
      <a
        [routerLink]="link"
        routerLinkActive="active"
        class="rota block hover:text-gray-300 transition-all p-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-slate-200 cursor-pointer"
        >{{ label }}</a
      >
    </li>
  `,
  styles: [
    `
      a.rota.active {
        border-bottom: 2px solid #fff;
      }
    `,
  ],
})
export class RouteLinkComponent {
  @Input() link: string[] | string = '';
  @Input() label = '';
}
