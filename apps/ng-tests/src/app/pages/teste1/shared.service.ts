import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  val = 1;
  myObjectVal = {
    prop1: 1,
    prop2: 2,
  };

  changeVal(value: any) {
    this.val += value;
  }

  changeObject(value: any) {
    this.myObjectVal = value;
  }

  changePropObject(value: any) {
    const newValue = this.myObjectVal.prop1 + value;
    this.myObjectVal.prop1 = newValue;
    const newProp2 = this.myObjectVal.prop2 + value;
    this.myObjectVal.prop2 = newProp2;
  }

  getVal() {
    return this.val;
  }

  setVal(value: any) {
    this.val = value;
  }
}
