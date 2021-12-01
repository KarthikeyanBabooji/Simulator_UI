import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAnalyisComponent } from './error-analyis.component';

describe('ErrorAnalyisComponent', () => {
  let component: ErrorAnalyisComponent;
  let fixture: ComponentFixture<ErrorAnalyisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAnalyisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAnalyisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
