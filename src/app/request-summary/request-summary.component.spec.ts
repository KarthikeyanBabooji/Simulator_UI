import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSummeryComponent } from './request-summary.component';

describe('RequestSummeryComponent', () => {
  let component: RequestSummeryComponent;
  let fixture: ComponentFixture<RequestSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
