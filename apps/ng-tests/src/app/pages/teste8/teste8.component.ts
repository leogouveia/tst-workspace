import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboModule } from './combo';

@Component({
  selector: 'app-teste8',
  standalone: true,
  imports: [CommonModule, ComboModule],
  templateUrl: './teste8.component.html',
  styleUrls: ['./teste8.component.css'],
})
export class Teste8Component {}
