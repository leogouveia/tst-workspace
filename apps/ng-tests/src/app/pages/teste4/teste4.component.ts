import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste4',
  template: `
    <h2>Testa Unsubscribe e Cancelamento de Requests</h2>
    <app-foo></app-foo>
    <app-bar></app-bar>
  `,
})
export class Teste4Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
