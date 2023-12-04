import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'teste1',
    loadChildren: () =>
      import('./pages/teste1/teste1.module').then((m) => m.Teste1Module),
  },
  {
    path: 'teste2',
    loadChildren: () =>
      import('./pages/teste2/teste2.module').then((m) => m.Teste2Module),
  },
  {
    path: 'teste3',
    loadChildren: () =>
      import('./pages/teste3/teste3.module').then((m) => m.Teste3Module),
  },
  {
    path: 'teste4',
    loadChildren: () =>
      import('./pages/teste4/teste4.module').then((m) => m.Teste4Module),
  },
  {
    path: 'teste5',
    loadChildren: () =>
      import('./pages/teste5/teste5.module').then((m) => m.Teste5Module),
  },
  {
    path: 'teste6',
    loadChildren: () =>
      import('./pages/teste6/teste6.module').then((m) => m.Teste6Module),
  },
  {
    path: 'teste7',
    loadComponent: () =>
      import('./pages/teste7/teste7.component').then((m) => m.Teste7Component),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
