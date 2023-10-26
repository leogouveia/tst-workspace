import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { BazComponent } from './baz.component';

@Component({
  selector: 'app-bar',
  template: `
    <div class="box">
      <h3 class="title">Bar Component [Normal]</h3>
      <div class="content">
        <li>My Val: {{ myServVal }}</li>
        <li>
          <button type="button" (click)="changeVal(20)">Change Val Bar</button>
        </li>
        <p><app-baz></app-baz></p>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, BazComponent],
})
export class BarComponent implements AfterViewChecked {
  myServVal: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.myServVal = this.sharedService.val;
  }

  changeVal(value: any) {
    this.sharedService.changeVal(100);
  }

  ngAfterViewChecked() {
    console.log('Component Bar view has been checked');
  }
}
