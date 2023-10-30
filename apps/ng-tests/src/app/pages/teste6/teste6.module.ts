import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Teste6RoutingModule } from './teste6-routing.module';
import { Teste6Component } from './teste6.component';
import { RouteLinkComponent } from '../../shared/route-link.component';

@NgModule({
  declarations: [Teste6Component],
  imports: [CommonModule, Teste6RoutingModule, RouteLinkComponent],
})
export class Teste6Module {}
