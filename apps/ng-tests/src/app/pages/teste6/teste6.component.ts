import { Component } from '@angular/core';

@Component({
  template: `
    <h2>Teste Services x Fetch</h2>

    <nav class="bg-black text-white">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex-1"></div>
        <ul class="flex ">
          <li class="p-0 m-0">
            <a
              [routerLink]="['fetch-comp']"
              routerLinkActive="active"
              class="rota block hover:text-gray-300 transition-all p-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-slate-200 cursor-pointer"
              >Fetch dados no Componente</a
            >
          </li>
          <li class="p-0 m-0">
            <a
              [routerLink]="['fetch-service']"
              routerLinkActive="active"
              class="rota block hover:text-gray-300 transition-all p-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-slate-200 cursor-pointer"
              >Fetch dados no Service</a
            >
          </li>
          <li class="p-0 m-0">
            <a
              [routerLink]="['fetch-ngneat']"
              routerLinkActive="active"
              class="rota block hover:text-gray-300 transition-all p-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-slate-200 cursor-pointer"
              >Fetch dados com NgNeat</a
            >
          </li>
          <li class="p-0 m-0">
            <a
              [routerLink]="['fetch-cashew']"
              routerLinkActive="active"
              class="rota block hover:text-gray-300 transition-all p-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-slate-200 cursor-pointer"
              >Fetch dados com Cashew</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a.rota.active {
        border-bottom: 2px solid #fff;
      }
    `,
  ],
})
export class Teste6Component {}
