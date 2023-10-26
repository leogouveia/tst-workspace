import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FredComponent } from './fred.component';

@Component({
  selector: 'app-qux',
  template: `
    <div class="box">
      <h3 class="title">Qux Component [On Push]</h3>
      <p class="content">
        <button (click)="clickQux()">Click QUX</button> & <app-fred></app-fred>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FredComponent],
})
export class QuxComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}
  clickQux() {}
  ngAfterViewChecked() {
    console.log('Component Qux view has been checked');
  }
}
