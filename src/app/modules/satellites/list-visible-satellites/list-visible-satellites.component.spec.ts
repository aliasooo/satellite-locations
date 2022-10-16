import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisibleSatellitesComponent } from './list-visible-satellites.component';

describe('ListVisibleSatellitesComponent', () => {
  let component: ListVisibleSatellitesComponent;
  let fixture: ComponentFixture<ListVisibleSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVisibleSatellitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVisibleSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
