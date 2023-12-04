import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Injectable,
  NgModule,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import pwc from 'pretty-web-console';

const changeDetectionStrategy = ChangeDetectionStrategy.Default;

@Injectable({
  providedIn: 'root',
})
export class Teste5Service {
  val: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  toggleValue() {
    this.val.next(this.val.getValue() === 0 ? 1 : 0);
  }
}

//#region Componentes A

@Component({
  selector: 'app-a1',
  template: `
    <div class="title">A1 ({{ value }})</div>
    <div class="content">
      <app-A1_1></app-A1_1>
      <app-A1_2></app-A1_2>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A1Component implements AfterViewChecked {
  @HostBinding('class') class = 'box';
  value = 0;

  constructor() {}

  ngAfterViewChecked(): void {
    pwc().bg('red').color('white').log('A1Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-A1_1',
  template: `
    <div class="box">
      <div class="title">A1_1 ({{ value }})</div>
      <div class="content">
        <app-A1_1_1></app-A1_1_1>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A1_1Component implements AfterViewChecked {
  @HostBinding('class') class = '';
  value = 0;

  constructor() {}

  ngAfterViewChecked(): void {
    pwc().bg('red').color('white').log('A1_1_Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-A1_1_1',
  template: `
    <div class="box">
      <div class="title">A1_1_1 ({{ value }})</div>
      <div class="content"><button (click)="({})">Click</button></div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A1_1_1Component implements AfterViewChecked {
  @HostBinding('class') class = '';
  value = 0;
  constructor() {}

  ngAfterViewChecked(): void {
    pwc().bg('red').color('white').log('A1_1_1_Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-A1_2',
  template: `
    <div class="box">
      <div class="title">A1_2 ({{ value }})</div>
      <div class="content">Content A1_2</div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A1_2Component implements AfterViewChecked {
  @HostBinding('class') class = '';
  value = 0;
  constructor() {}

  ngAfterViewChecked(): void {
    pwc().bg('red').color('white').log('A1_2_Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-a2',
  template: `
    <div class="title">A2 ({{ value }})</div>
    <div class="content">
      <button type="button" (click)="({})">A2 Click</button>
      <app-a2_1></app-a2_1>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A2Component {
  @HostBinding('class') class = 'box';
  value = 0;
  constructor() {}

  ngAfterViewChecked(): void {
    pwc().bg('IndianRed').color('white').log('A2Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-a2_1',
  template: `
    <div class="box">
      <div class="title">A2_1 ({{ value }})</div>
      <div class="content">
        <app-a2_1_1> </app-a2_1_1>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A2_1Component {
  value = 0;
  constructor() {}

  ngAfterViewChecked(): void {
    pwc()
      .bg('darkred')
      .color('lightCoral')
      .log('A2_1_Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-a2_1_1',
  template: `
    <div class="box">
      <div class="title">A2_1_1 ({{ value }})</div>
      <div class="content">
        <button (click)="({})">Click</button>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A2_1_1Component {
  value = 0;
  constructor() {}

  ngAfterViewChecked(): void {
    pwc()
      .bg('Firebrick')
      .color('orange')
      .log('A2_1_1Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-a3',
  template: `
    <div class="title">A3 ({{ value }})</div>
    <div class="content">A3 works!</div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class A3Component {
  @HostBinding('class') class = 'box';
  value = 0;
  constructor() {}

  ngAfterViewChecked(): void {
    pwc().bg('white').color('red').log('A3Component.ngAfterViewChecked');
    this.value++;
  }
}

//#endregion

//#region Componentes B

@Component({
  selector: 'app-b1',
  template: `
    <div class="title">B1 ({{ value }})</div>
    <div class="content"><app-b1_1></app-b1_1></div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class B1Component {
  @HostBinding('class') class = 'box';
  value = 0;

  ngAfterViewChecked(): void {
    pwc().bg('navy').color('white').log('B1Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-b1_1',
  template: `
    <div class="box">
      <div class="title">B1_1 ({{ value }})</div>
      <div class="content"><app-b1_1_1></app-b1_1_1></div>
    </div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class B1_1Component {
  value = 0;

  ngAfterViewChecked(): void {
    pwc().bg('navy').color('white').log('B1_1_Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-b1_1_1',
  template: `
    <div class="box">
      <div class="title">B1_1_1 ({{ value }})</div>
      <div class="content">
        <button type="button" (click)="({})">Click</button>
      </div>
    </div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class B1_1_1Component {
  value = 0;

  ngAfterViewChecked(): void {
    pwc().bg('navy').color('white').log('B1_1_1_Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-b2',
  template: `
    <div class="title">B2 ({{ value }})</div>
    <div class="content">B2 works!</div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class B2Component {
  @HostBinding('class') class = 'box';
  value = 0;
  ngAfterViewChecked(): void {
    pwc().bg('royalblue').color('white').log('B2Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-b3',
  template: `
    <div class="title">B3 ({{ value }})</div>
    <div class="content">B3 works!</div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class B3Component {
  @HostBinding('class') class = 'box';
  value = 0;
  ngAfterViewChecked(): void {
    pwc().bg('royalblue').color('white').log('B3Component.ngAfterViewChecked');
    this.value++;
  }
}

//#endregion

//#region Componentes C

@Component({
  selector: 'app-c1',
  template: `
    <div class="title">C1 ({{ value }})</div>
    <div class="content"></div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class C1Component {
  @HostBinding('class') class = 'box';
  value = 0;
  ngAfterViewChecked(): void {
    pwc().bg('olive').color('white').log('C1Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-c2',
  template: `
    <div class="title">C2 ({{ value }})</div>
    <div class="content">
      <button (click)="setValue()">C2 works!</button>

      <hr />
    </div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class C2Component {
  @HostBinding('class') class = 'box';
  value = 0;
  setValue() {
    console.log('C2Component.setValue');
  }

  changeView(strategy: string) {}

  ngAfterViewChecked(): void {
    pwc().bg('green').color('white').log('C2Component.ngAfterViewChecked');
    this.value++;
  }
}

@Component({
  selector: 'app-c3',
  template: `
    <div class="title">C3 ({{ value2 }})</div>
    <div class="content">
      <button (click)="setValue()">C3 works!</button>
    </div>
  `,
  changeDetection: changeDetectionStrategy,
})
export class C3Component {
  @HostBinding('class') class = 'box';
  value2 = 0;
  value = this.teste5service.val.asObservable();

  constructor(private teste5service: Teste5Service) {}

  setValue() {
    console.log('C3Component.setValue');
  }

  ngAfterViewChecked(): void {
    pwc().bg('black').color('lime').log('C3Component.ngAfterViewChecked');
    this.value2++;
  }
}

//#endregion

@NgModule({
  declarations: [
    A1Component,
    B1Component,
    C1Component,
    A2Component,
    B2Component,
    B3Component,
    C2Component,
    C3Component,
    A3Component,
    A2_1Component,
    A2_1_1Component,
    A1_1Component,
    A1_2Component,
    A1_1_1Component,
    B1_1Component,
    B1_1_1Component,
  ],
  imports: [CommonModule],
  exports: [
    A1Component,
    B1Component,
    C1Component,
    A2Component,
    B2Component,
    B3Component,
    C2Component,
    C3Component,
    A3Component,
  ],
})
export class ComboModule {}
