import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchServiceComponent } from './fetch-service.component';

describe('FetchServiceComponent', () => {
  let component: FetchServiceComponent;
  let fixture: ComponentFixture<FetchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FetchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
