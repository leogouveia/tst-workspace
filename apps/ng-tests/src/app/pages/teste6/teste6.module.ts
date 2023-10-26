import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Teste6RoutingModule } from './teste6-routing.module';
import { Teste6Component } from './teste6.component';
import { FetchCompComponent } from './fetch-comp/fetch-comp.component';

@NgModule({
  declarations: [Teste6Component],
  imports: [CommonModule, Teste6RoutingModule],
})
export class Teste6Module {}
