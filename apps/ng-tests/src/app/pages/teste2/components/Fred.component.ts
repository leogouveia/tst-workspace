import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { Shared2Service } from '../shared2.service';

@Component({
  selector: 'app-fred',
  template: `
    <div class="box">
      <h2 class="title">Fred Component</h2>
      <div class="content">
        <ul>
          <li>Value: {{ obj | json }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FredComponent implements AfterViewChecked {
  sharedService = inject(Shared2Service);
  obj = this.sharedService.myObjectVal;

  ngAfterViewChecked() {
    console.log(
      'Teste2: Component %cFred%c view has been checked',
      'color: orange',
      'color: auto'
    );
  }
}
