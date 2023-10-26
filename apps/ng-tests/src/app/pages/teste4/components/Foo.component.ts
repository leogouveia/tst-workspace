import { Component } from '@angular/core';
import { Teste4SharedService } from '../teste4-shared.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-foo',
  template: `
    <div class="box">
      <h3 class="title">Foo</h3>
      <div class="content">
        <p>
          <button type="button" (click)="getDataUsingPromise()">
            Get data using Promise
          </button>
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class FooComponent {
  data: any;
  constructor(private teste4Service: Teste4SharedService) {}

  async getDataUsingPromise() {
    const promises: Promise<any>[] = [];
    for (let i = 0; i < 10; i++) {
      promises.push(this.fetch(i + 1));
    }
    Promise.all(promises).then(() => {
      console.log('all promises resolved');
    });
  }

  async fetch(delay = 1000) {
    console.log('getting data using promise');
    return this.teste4Service.getHttpWithPromise(delay).then((data) => {
      this.data = data;
      console.log('data', data);
      console.log('fim promise');
    });
  }

  ngOnDestroy(): void {
    console.log('Teste4 BarComponent ngOnDestroy');
  }

  ngAfterViewChecked() {
    console.log(
      'Teste4: Component %cFoo%c view has been checked',
      'color: yellow',
      'color: auto'
    );
  }
}
