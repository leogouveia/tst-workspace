import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-qux',
  template: `
    <div class="box">
      <h2 class="title">Qux Component [OnPush]</h2>
      <div class="content">
        <div>
          A partir do componente filho, o que não fizer trigger do OnPush não
          será atualizado.
        </div>
        <ul style="display: flex; flex-direction: column; gap: 10px;">
          <li>
            Se algum @Input mudar.
            <div class="annotation">
              Se a referencia dos inputs não mudar, o Angular assume que o
              componente é o mesmo e não o verifica novamente.
            </div>
          </li>
          <li>Se algum evento for emitido no component.</li>
          <li>
            Se um observable for emitido e o componente estiver inscrito.
            <div class="annotation">
              Se você estiver passando um Observable como um @Input para um
              componente que usa OnPush, você precisa se inscrever ao Observable
              no nível do template usando o pipe async.
            </div>
          </li>
          <li>Se o método markForCheck() for chamado.</li>
        </ul>
        <app-fred></app-fred>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuxComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log(
      'Teste2: Component %cQux%c view has been checked',
      'color: blue',
      'color: auto'
    );
  }
}
