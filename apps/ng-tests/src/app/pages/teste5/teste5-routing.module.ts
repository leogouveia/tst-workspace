import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teste5Component } from './teste5.component';

const routes: Routes = [{ path: '', component: Teste5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Teste5RoutingModule { }
