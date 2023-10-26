import { CommonModule } from '@angular/common';
import { Component, AfterViewChecked } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-foo',
  template: `
    <div class="box">
      <h3 class="title">Foo Component [Normal]</h3>
      <div class="content">
        <ul>
          <li>Value: {{ myServVal }}</li>
          <li>Object: {{ objVar | json }}</li>
          <li>Value From Service: {{ valueFromService ?? 'null' }}</li>
        </ul>
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
  standalone: true,
  imports: [CommonModule],
})
export class FooComponent implements AfterViewChecked {
  myServVal: any;
  objVar: any;
  valueFromService?: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.myServVal = this.sharedService.val;
    this.objVar = this.sharedService.myObjectVal;
  }

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
    this.sharedService.setVal((this.valueFromService ?? 0) + 100);
  }

  changeObject() {
    this.sharedService.changeObject({
      prop1: 10,
      prop2: 20,
    });
  }

  ngAfterViewChecked() {
    console.log('Component Foo view has been checked');
  }
}
