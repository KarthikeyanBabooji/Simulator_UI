import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultitenancyComponent } from './multitenancy.component';

describe('MultitenancyComponent', () => {
  let component: MultitenancyComponent;
  let fixture: ComponentFixture<MultitenancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultitenancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultitenancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
