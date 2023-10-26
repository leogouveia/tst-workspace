import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Shared2Service } from '../shared2.service';

@Component({
  selector: 'app-bar',
  template: `<div class="box">
    <h2 class="title">Bar Component [OnPush]</h2>
    <div class="content">
      <ul>
        <li>Value$: {{ val$ | async }}</li>
      </ul>
    </div>

    <app-baz></app-baz>
  </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent implements AfterViewChecked {
  val$ = this.sharedService.valBS.asObservable();
  constructor(private sharedService: Shared2Service) {}

  ngAfterViewChecked() {
    console.log(
      'Teste2: Component %cBar%c view has been checked',
      'color: green',
      'color: auto'
    );
  }
}
