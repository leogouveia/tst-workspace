import { Pipe, PipeTransform } from '@angular/core';
import pwc from 'pretty-web-console';

@Pipe({
  name: 'teste7',
  standalone: true,
})
export class Teste7Pipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    pwc().bg('pink').color('purple').log(`➡️ ➡️ ➡️ ➡️ Pipe`);
    return `-- ${value} --`;
  }
}
