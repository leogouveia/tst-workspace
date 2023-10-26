import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
} from '@angular/core';
import { QuxComponent } from './qux.component';

@Component({
  selector: 'app-baz',
  template: `<div class="box">
    <h3 class="title">Baz Component [On Push]</h3>
    <div class="content">
      <button (click)="(clickBaz)">Click Baz</button>
      <br />
      <app-qux></app-qux>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [QuxComponent],
})
export class BazComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  clickBaz() {
    console.log('Click Baz');
  }

  ngAfterViewChecked() {
    console.log('Component Baz view has been checked');
  }
}
