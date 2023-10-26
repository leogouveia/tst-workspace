import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { Shared2Service } from '../shared2.service';

@Component({
  selector: 'app-baz',
  template: ` <div class="box">
    <h2 class="title">Baz Component [OnPush]</h2>
    <div class="content">
      <ul>
        <li>Value$: {{ val$ | async }}</li>
      </ul>
      <app-qux></app-qux>
    </div>
  </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BazComponent implements AfterViewChecked {
  private sharedService = inject(Shared2Service);
  val$ = this.sharedService.valBS.asObservable();

  ngAfterViewChecked() {
    console.log(
      'Teste2: Component %cBaz%c view has been checked',
      'color: red',
      'color: auto'
    );
  }
}
