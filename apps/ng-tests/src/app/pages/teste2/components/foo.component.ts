import { CommonModule } from '@angular/common';
import { Component, AfterViewChecked } from '@angular/core';
import { Shared2Service } from '../shared2.service';

@Component({
  selector: 'app-foo',
  template: `
    <div class="box">
      <h3 class="title">Foo Component [Normal]</h3>
      <div class="content">
        <div>
          <h4>Common Values</h4>
          <ul>
            <li>Value: {{ myServVal }}</li>
            <li>Object: {{ objVar | json }}</li>
            <li>Value From Service: {{ valueFromService ?? 'null' }}</li>
          </ul>
        </div>
        <div>
          <h4>Reactive Values</h4>
          <ul>
            <li>Value: {{ valBS | async }}</li>
            <li>Object: {{ objectBS | async | json }}</li>
          </ul>
        </div>
        <hr />
        <ul>
          <li>
            <button type="button" (click)="changeVal(10)">
              Change Val Foo (Change Reference)
            </button>
            <div class="annotation">Change reference of the Val.</div>
          </li>
        </ul>
        <ul>
          <li>
            <button type="button" (click)="changeProp()">
              Only change prop from object Foo
            </button>
            <div class="annotation">
              Only change property from object, not changing it's Reference
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <button (click)="changeObject()">Change Object</button>
            <div class="annotation">Change reference of the object</div>
          </li>
        </ul>
        <ul>
          <li>
            <button (click)="getValFromService()">
              Get Value From Service
            </button>
            <div class="annotation">Get value from service again using fn.</div>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class FooComponent implements AfterViewChecked {
  myServVal = this.sharedService.val;
  objVar = this.sharedService.myObjectVal;
  valueFromService?: number = 0;

  valBS = this.sharedService.valBS;
  objectBS = this.sharedService.objectBS;

  constructor(private sharedService: Shared2Service) {}

  ngOnInit() {}

  changeVal(value: any) {
    this.sharedService.changeVal(value);
  }

  changeProp() {
    this.sharedService.changePropObject(10);
  }

  getValFromService() {
    this.valueFromService = this.sharedService.getVal();
  }

  setValFromService() {
    this.sharedService.changeVal((this.valueFromService ?? 0) + 100);
  }

  changeObject() {
    this.sharedService.changeObject({
      prop1: 10,
      prop2: 20,
    });
  }

  ngAfterViewChecked() {
    console.log(
      'Teste2: Component %cFoo%c view has been checked',
      'color: yellow',
      'color: auto'
    );
  }

  ngOnDestroy() {
    console.log(
      'Teste2: Component %cFoo%c has been destroyed',
      'color: red',
      'color: auto'
    );
  }
}
