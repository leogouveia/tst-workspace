import { AfterViewChecked, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import pwc from 'pretty-web-console';
import { Teste7Pipe } from '../teste7.pipe';

@Component({
  selector: 'tst-app-a',
  standalone: true,
  imports: [CommonModule, FormsModule, Teste7Pipe],
  templateUrl: './app-a.component.html',
  styleUrls: ['./app-a.component.scss'],
})
export class AppAComponent implements AfterViewChecked {
  inputValue = '';
  value = 0;

  get valueGetter() {
    pwc().bg('green').color('white').log(`valueGetter`);
    return `**${this.inputValue}**`;
  }

  ngAfterViewChecked(): void {
    pwc()
      .bg('red')
      .color('white')
      .log(`Teste 7 AppAComponent.ngAfterViewChecked ${this.value}`);
    this.value++;
  }

  formatFn(value: string) {
    pwc().bg('blue').color('white').log(`formatFn`);
    return `__${value}__`;
  }

  handleButtonClick() {
    pwc().bg('gray').color('black').log('click');
  }
}
