import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-fred',
  template: `
    <div class="box">
      <div class="title">Fred Component [On Push]</div>
      <div class="content">
        <span style="border: 1px solid blue; padding: 2px">
          <span> Fred Content </span></span
        >
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FredComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    console.log('Component fred view has been checked');
  }
}
