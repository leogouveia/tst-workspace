import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Teste4Component } from './teste4.component';
import { FooComponent } from './components/Foo.component';
import { BarComponent } from './components/Bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Teste4Component,
      },
    ]),
  ],
  exports: [],
  declarations: [Teste4Component, FooComponent, BarComponent],
  providers: [],
})
export class Teste4Module {}
