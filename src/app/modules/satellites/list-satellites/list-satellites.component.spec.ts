import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSatellitesComponent } from './list-satellites.component';

describe('ListSatellitesComponent', () => {
  let component: ListSatellitesComponent;
  let fixture: ComponentFixture<ListSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSatellitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
