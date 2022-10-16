import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatellitesTableComponent } from './satellites-table.component';

describe('SatellitesTableComponent', () => {
  let component: SatellitesTableComponent;
  let fixture: ComponentFixture<SatellitesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatellitesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatellitesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
