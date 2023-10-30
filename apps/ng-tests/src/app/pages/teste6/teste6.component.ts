import { Component } from '@angular/core';
import { routes } from './teste6-routing.module';

@Component({
  template: `
    <h2>Teste Services x Fetch</h2>

    <nav class="bg-black text-white">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex-1"></div>
        <ul class="flex ">
          <app-route-link
            *ngFor="let route of routes"
            [link]="route.link"
            [label]="route.label"
          ></app-route-link>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class Teste6Component {
  routes = routes?.[0].children?.map((r: any) => ({
    label: r.title ?? '',
    link: r.path ?? '',
  }));
}
