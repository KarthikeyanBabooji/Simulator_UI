import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPerformanceComponent } from './transaction-performance.component';

describe('TransactionPerformanceComponent', () => {
  let component: TransactionPerformanceComponent;
  let fixture: ComponentFixture<TransactionPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
