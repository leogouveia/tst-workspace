import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste8Component } from './teste8.component';

describe('Teste8Component', () => {
  let component: Teste8Component;
  let fixture: ComponentFixture<Teste8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Teste8Component]
    });
    fixture = TestBed.createComponent(Teste8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
