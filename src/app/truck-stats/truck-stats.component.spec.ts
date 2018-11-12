import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckStatsComponent } from './truck-stats.component';

describe('TruckStatsComponent', () => {
  let component: TruckStatsComponent;
  let fixture: ComponentFixture<TruckStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
