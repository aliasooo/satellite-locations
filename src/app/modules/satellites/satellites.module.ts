import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinatesModule } from 'angular-coordinates';

import { SatellitesRoutingModule } from './satellites-routing.module';
import { ListSatellitesComponent } from './list-satellites/list-satellites.component';
import { ClarityModule } from '@clr/angular';
import { ListVisibleSatellitesComponent } from './list-visible-satellites/list-visible-satellites.component';
import { SatelliteHealthFilterComponent } from './satellite-health-filter/satellite-health-filter.component';

@NgModule({
  declarations: [ListSatellitesComponent, ListVisibleSatellitesComponent, SatelliteHealthFilterComponent],
  imports: [
    CommonModule,
    SatellitesRoutingModule,
    ClarityModule,
    CoordinatesModule,
  ],
})
export class SatellitesModule {}
