import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatellitesRoutingModule } from './satellites-routing.module';
import { ListSatellitesComponent } from './list-satellites/list-satellites.component';
import { ClarityModule } from '@clr/angular';
import { ListVisibleSatellitesComponent } from './list-visible-satellites/list-visible-satellites.component';

@NgModule({
  declarations: [ListSatellitesComponent, ListVisibleSatellitesComponent],
  imports: [CommonModule, SatellitesRoutingModule, ClarityModule],
})
export class SatellitesModule {}
