import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatellitesRoutingModule } from './satellites-routing.module';
import { ListSatellitesComponent } from './list-satellites/list-satellites.component';


@NgModule({
  declarations: [
    ListSatellitesComponent
  ],
  imports: [
    CommonModule,
    SatellitesRoutingModule
  ]
})
export class SatellitesModule { }
