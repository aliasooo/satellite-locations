import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteDetailsComponent } from './satellite-details.component';

describe('SatelliteDetailsComponent', () => {
  let component: SatelliteDetailsComponent;
  let fixture: ComponentFixture<SatelliteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatelliteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatelliteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
