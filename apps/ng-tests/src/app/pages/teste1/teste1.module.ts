import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teste1Component } from './teste1.component';
import { RouterModule } from '@angular/router';
import { BarComponent } from './components/bar.component';
import { FooComponent } from './components/foo.component';
import { BazComponent } from './components/baz.component';
import { FredComponent } from './components/fred.component';
import { QuxComponent } from './components/qux.component';

@NgModule({
  declarations: [Teste1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Teste1Component }]),
    BarComponent,
    FooComponent,
    BazComponent,
    FredComponent,
    QuxComponent,
  ],
})
export class Teste1Module {}
