import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teste6Component } from './teste6.component';

export const routes: Routes = [
  {
    path: '',
    component: Teste6Component,
    children: [
      {
        path: 'fetch-comp',
        title: 'Fetch Component',
        loadComponent: () =>
          import('./fetch-comp/fetch-comp.component').then(
            (m) => m.FetchCompComponent
          ),
      },
      {
        path: 'fetch-service',
        title: 'Fetch Service',
        loadComponent: () =>
          import('./fetch-service/fetch-service.component').then(
            (m) => m.FetchServiceComponent
          ),
      },
      {
        path: 'fetch-ngneat',
        title: 'Fetch NgNeat',
        loadComponent: () =>
          import('./fetch-ngneat/fetch-ngneat.component').then(
            (m) => m.FetchNgneatComponent
          ),
      },
      {
        path: 'fetch-cashew',
        title: 'Fetch Cashew',
        loadComponent: () =>
          import('./fetch-cashew/fetch-cashew.component').then(
            (m) => m.FetchCashewComponent
          ),
      },
      {
        path: 'fetch-cache',
        title: 'Fetch Cache',
        loadComponent: () =>
          import('./fetch-cache/fetch-cache.component').then(
            (m) => m.FetchCacheComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Teste6RoutingModule {}
