import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinatesModule } from 'angular-coordinates';

import { SatellitesRoutingModule } from './satellites-routing.module';
import { ListSatellitesComponent } from './list-satellites/list-satellites.component';
import { ClarityModule } from '@clr/angular';
import { ListVisibleSatellitesComponent } from './list-visible-satellites/list-visible-satellites.component';
import { SatelliteHealthFilterComponent } from './satellite-health-filter/satellite-health-filter.component';
import { SatelliteDetailsComponent } from './satellite-details/satellite-details.component';
import { SatellitesTableComponent } from './satellites-table/satellites-table.component';

@NgModule({
  declarations: [ListSatellitesComponent, ListVisibleSatellitesComponent, SatelliteHealthFilterComponent, SatelliteDetailsComponent, SatellitesTableComponent],
  imports: [
    CommonModule,
    SatellitesRoutingModule,
    ClarityModule,
    CoordinatesModule,
  ],
})
export class SatellitesModule {}
