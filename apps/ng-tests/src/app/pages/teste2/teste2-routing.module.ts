import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teste2Component } from './teste2.component';

const routes: Routes = [{ path: '', component: Teste2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Teste2RoutingModule { }
