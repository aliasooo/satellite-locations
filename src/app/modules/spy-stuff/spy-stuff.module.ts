import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpyStuffRoutingModule } from './spy-stuff-routing.module';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    SpyStuffRoutingModule
  ]
})
export class SpyStuffModule { }
