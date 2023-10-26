import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared2Service {
  val = 1;
  myObjectVal = {
    prop1: 1,
    prop2: 2,
  };

  valBS = new BehaviorSubject<number>(1);
  objectBS = new BehaviorSubject<any>({
    prop1: 1,
    prop2: 20,
  });

  changeVal(value: any) {
    this.val += value;
    this.valBS.next(this.valBS.value + value);
  }

  changeObject(value: any) {
    this.myObjectVal = value;
    this.objectBS.next(value);
  }

  changePropObject(value: any) {
    const newValue = this.myObjectVal.prop1 + value;
    this.myObjectVal.prop1 = newValue;
    const newProp2 = this.myObjectVal.prop2 + value;
    this.myObjectVal.prop2 = newProp2;

    this.objectBS.next({
      ...this.objectBS.value,
      prop1: newValue,
      prop2: newProp2,
    });
  }

  getVal() {
    return this.val;
  }
}
