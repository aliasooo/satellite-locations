import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MapRoutingModule } from './map-routing.module';
import { MapViewComponent } from './map-view/map-view.component';
import { ClarityModule } from '@clr/angular';
import { CoordinatesModule } from 'angular-coordinates';

@NgModule({
  declarations: [MapViewComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1Ijoib25lYWxtYXJhbmdlIiwiYSI6ImNqbnR4dDhycTAzdTUzcG8zeDV0azEzdXYifQ.dNUoYF7qevRDwleXY7820A',
    }),
    ClarityModule,
    CoordinatesModule,
  ],
})
export class MapModule {}
