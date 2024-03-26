import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import pwc from 'pretty-web-console';
import { Teste7Pipe } from '../teste7.pipe';
import { BehaviorSubject, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule, FormsModule, Teste7Pipe, ReactiveFormsModule],
  templateUrl: './app-a.component.html',
  styleUrls: ['./app-a.component.scss'],
})
export class AppAComponent {
  inputValueControl = new FormControl('');
  inputValue = this.inputValueControl.value;
  value = 0;
  valueBS = new BehaviorSubject<string>('$$ $$');
  value$ = this.inputValueControl.valueChanges.pipe(
    tap(() => {
      pwc().bg('purple').color('white').log(`Observable`);
    }),
    map((v) => `$$ ${v} $$`)
  );

  get valueGetter() {
    pwc().bg('green').color('white').log(`valueGetter`);
    return `**${this.inputValue}**`;
  }

  formatFn(value: string | null) {
    pwc().bg('blue').color('white').log(`formatFn`);
    return `__${value}__`;
  }

  inlineIf() {
    pwc().bg('yellow').color('black').log('ternarioInline');
    return this.inputValue;
  }

  handleButtonClick() {
    pwc().bg('gray').color('black').log('click');
  }
}
