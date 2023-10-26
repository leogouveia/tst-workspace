import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teste6Component } from './teste6.component';

const routes: Routes = [
  {
    path: '',
    component: Teste6Component,
    children: [
      {
        path: 'fetch-comp',
        loadComponent: () =>
          import('./fetch-comp/fetch-comp.component').then(
            (m) => m.FetchCompComponent
          ),
      },
      {
        path: 'fetch-service',
        loadComponent: () =>
          import('./fetch-service/fetch-service.component').then(
            (m) => m.FetchServiceComponent
          ),
      },
      {
        path: 'fetch-ngneat',
        loadComponent: () =>
          import('./fetch-ngneat/fetch-ngneat.component').then(
            (m) => m.FetchNgneatComponent
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
