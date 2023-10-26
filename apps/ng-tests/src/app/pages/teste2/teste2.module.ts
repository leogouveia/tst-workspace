import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Teste2RoutingModule } from './teste2-routing.module';
import { Teste2Component } from './teste2.component';
import { FooComponent } from './components/foo.component';
import { BarComponent } from './components/Bar.component';
import { BazComponent } from './components/Baz.component';
import { QuxComponent } from './components/Qux.component';
import { FredComponent } from './components/Fred.component';

@NgModule({
  declarations: [Teste2Component, FooComponent, BarComponent, BazComponent, QuxComponent, FredComponent],
  imports: [CommonModule, Teste2RoutingModule],
})
export class Teste2Module {}
