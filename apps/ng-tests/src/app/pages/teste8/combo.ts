import { CommonModule } from '@angular/common';
import {
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
  value = new BehaviorSubject<number>(0);
  value$ = this.value.asObservable();

  constructor() {
    setTimeout(() => {
      this.value.next(1);
    }, 5000);
  }
  toggleValue() {
    this.val.next(this.val.getValue() === 0 ? 1 : 0);
  }

  addValue() {
    const newValue = this.value.getValue() + 1;
    this.value.next(newValue);
  }
}

//#region Componentes A
@Component({
  selector: 'app-root',
  template: `
    <ng-content *ngIf="logChangeDetection()"></ng-content>
    <div class="m-5">
      <h1 class="title-alt">
        Strategy: {{ changeDetectionStrategy === 1 ? 'Default' : 'OnPush' }}
      </h1>
      <br />
    </div>
    <app-cmp1></app-cmp1>
  `,

  changeDetection: changeDetectionStrategy,
})
export class RootComponent {
  changeDetectionStrategy = changeDetectionStrategy;
  logChangeDetection(): void {
    pwc().bg('black').color('white').log('RootComponent.logChangeDetection');
  }
}

@Component({
  selector: 'app-cmp1',
  template: `
    <div class="box">
      <ng-content *ngIf="logChangeDetection()"></ng-content>
      <div class="title">Component 1 ({{ value }})</div>
      <div class="content">
        <app-cmp2></app-cmp2>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class Cmp1Component {
  @HostBinding('class') class = 'box';
  value = 0;
  changeDetectionStrategy = changeDetectionStrategy;

  logChangeDetection(): void {
    pwc().bg('blue').color('white').log('Cmp1Component.logChangeDetection');
  }
}

@Component({
  selector: 'app-cmp2',
  template: `
    <ng-content *ngIf="logChangeDetection()"></ng-content>
    <div class="box">
      <div class="title">Component 2 ({{ value }})</div>
      <div class="content">
        <button type="button" (click)="({})">Button Click</button>
        <app-cmp3></app-cmp3>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class Cmp2Component {
  @HostBinding('class') class = '';
  value = 0;

  logChangeDetection(): void {
    pwc().bg('green').color('white').log('Cmp2Component.logChangeDetection');
    // this.value++;
  }
}

@Component({
  selector: 'app-cmp3',
  template: `
    <ng-content *ngIf="logChangeDetection()"></ng-content>
    <div class="box">
      <div class="title">Component 3({{ value }})</div>
      <div class="content">
        <app-cmp4></app-cmp4>
        <app-cmp5></app-cmp5>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class Cmp3Component {
  @HostBinding('class') class = '';
  value = 0;

  logChangeDetection(): void {
    pwc().bg('yellow').color('black').log('Cmp3Component.logChangeDetection');
    // this.value++;
  }
}

@Component({
  selector: 'app-cmp4',
  template: `
    <ng-content *ngIf="logChangeDetection()"></ng-content>
    <div class="box">
      <div class="title">Component 4 ({{ value }})</div>
      <div class="content">Content Component 4</div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class Cmp4Component {
  @HostBinding('class') class = '';
  value = 0;

  logChangeDetection(): void {
    pwc().bg('pink').color('black').log('Cmp4Component.logChangeDetection');
    // this.value++;
  }
}

@Component({
  selector: 'app-cmp5',
  template: `
    <ng-content *ngIf="logChangeDetection()"></ng-content>
    <div class="box">
      <div class="title">Component 5 ({{ value }})</div>
      <div class="content">
        <app-button></app-button>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class Cmp5Component {
  @HostBinding('class') class = '';
  value = 0;

  logChangeDetection(): void {
    pwc().bg('purple').color('black').log('Cmp5Component.logChangeDetection');
    // this.value++;
  }
}

@Component({
  selector: 'app-button',
  template: `
    <div class="box">
      <ng-content *ngIf="logChangeDetection()"></ng-content>
      <div class="title">Button Component ({{ value }})</div>
      <div class="content">
        <button type="button" (click)="({})">Button Click</button>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: changeDetectionStrategy,
})
export class ButtonComponent {
  @HostBinding('class') class = 'box';
  value = 0;

  logChangeDetection(): void {
    pwc().bg('navy').color('white').log('ButtonComponent.logChangeDetection');
    // this.value++;
  }
}

@NgModule({
  declarations: [
    RootComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    Cmp4Component,
    Cmp5Component,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    RootComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    Cmp4Component,
    Cmp5Component,
    ButtonComponent,
  ],
})
export class ComboModule {}
