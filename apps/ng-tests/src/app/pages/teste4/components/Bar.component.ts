import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription, finalize } from 'rxjs';
import { Teste4SharedService } from '../teste4-shared.service';

@Component({
  selector: 'app-bar',
  template: `
    <div class="box">
      <h3 class="title">Bar</h3>
      <div class="content">
        <button type="button" (click)="getDataUsingObservable()">
          getDataUsingObservable
        </button>
        <hr />
        <button type="button" (click)="cancelRequests()">
          Cancela requestes
        </button>
        <hr />
        <div>Response {{ teste$ | async | json }}</div>
      </div>
    </div>
  `,
  styles: [],
})
export class BarComponent implements OnDestroy {
  destroy$ = new Subject<boolean>();
  subscriptions: Subscription[] = [];

  teste$ = this.teste4Service.getHttpWithObservable(10).pipe(
    finalize(() => {
      console.log('http finalize');
    })
  );

  constructor(private teste4Service: Teste4SharedService) {}

  getDataUsingObservable() {
    for (let i = 0; i < 10; i++) {
      this.fetch(i + 1);
    }
  }

  fetch(delay = 1) {
    console.log('getting data using observable');
    const subs = this.teste4Service
      .getHttpWithObservable(delay)
      .pipe(finalize(() => console.log('Teste4: httpObs/many finalize')))
      .subscribe((data) => {
        console.log('Observable data', data);
      });
    this.subscriptions.push(subs);
  }

  cancelRequests() {
    this.subscriptions.forEach((s) => {
      console.log('ubsubscribing');
      s.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    console.log('Teste4 BarComponent ngOnDestroy');
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.subscriptions.forEach((s) => {
      console.log('ubsubscribing');
      s.unsubscribe();
    });
  }

  ngAfterViewChecked() {
    console.log(
      '%cTeste4: Component Bar view has been checked',
      'color: green'
    );
  }
}
