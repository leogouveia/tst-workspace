import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teste3Component } from './Teste3.component';

const routes: Routes = [
  {
    path: '',
    component: Teste3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Teste3RoutingModule {}
