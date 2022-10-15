import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSatellitesComponent } from './list-satellites/list-satellites.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ListSatellitesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatellitesRoutingModule {}
