import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSatellitesComponent } from './list-satellites/list-satellites.component';
import { ListVisibleSatellitesComponent } from './list-visible-satellites/list-visible-satellites.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ListSatellitesComponent },
  { path: 'list-visible', component: ListVisibleSatellitesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatellitesRoutingModule {}
