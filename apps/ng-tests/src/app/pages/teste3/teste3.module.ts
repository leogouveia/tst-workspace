import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { Teste3RoutingModule } from './teste3-routing.module';
import { Teste3Component } from './Teste3.component';

@NgModule({
  declarations: [Teste3Component],
  imports: [CommonModule, Teste3RoutingModule],
  providers: [DatePipe],
})
export class Teste3Module {}
