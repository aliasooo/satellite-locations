import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalContainerComponent } from './components/portal-container/portal-container.component';
import { AuthGuard } from './guards/auth.guard';
import { SpyStuffGuard } from './guards/spy-stuff.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'portal',
    component: PortalContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'satellites' },
      {
        path: 'satellites',
        loadChildren: () =>
          import('src/app/modules/satellites/satellites.module').then(
            (m) => m.SatellitesModule
          ),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('src/app/modules/map/map.module').then((m) => m.MapModule),
      },
      {
        path: 'spy-stuff',
        canLoad: [SpyStuffGuard],
        loadChildren: () =>
          import('src/app/modules/spy-stuff/spy-stuff.module').then(
            (m) => m.SpyStuffModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
