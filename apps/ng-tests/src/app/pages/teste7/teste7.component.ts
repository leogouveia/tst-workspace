import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAComponent } from './app-a/app-a.component';
import { Teste7Pipe } from './teste7.pipe';

@Component({
  selector: 'tst-workspace-teste7',
  standalone: true,
  imports: [CommonModule, AppAComponent, Teste7Pipe],
  templateUrl: './teste7.component.html',
  styleUrls: ['./teste7.component.scss'],
})
export class Teste7Component {}
