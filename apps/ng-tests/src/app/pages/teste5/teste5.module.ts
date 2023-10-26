import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Teste5RoutingModule } from './teste5-routing.module';
import { Teste5Component } from './teste5.component';
import { ComboModule } from './combo';

@NgModule({
  declarations: [Teste5Component],
  imports: [CommonModule, Teste5RoutingModule, ComboModule],
})
export class Teste5Module {}
