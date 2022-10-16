import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteHealthFilterComponent } from './satellite-health-filter.component';

describe('SatelliteHealthFilterComponent', () => {
  let component: SatelliteHealthFilterComponent;
  let fixture: ComponentFixture<SatelliteHealthFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatelliteHealthFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatelliteHealthFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
