import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAlertsComponent } from './truck-alerts.component';

describe('TruckAlertsComponent', () => {
  let component: TruckAlertsComponent;
  let fixture: ComponentFixture<TruckAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
