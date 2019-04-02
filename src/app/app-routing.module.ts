import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistsComponent } from './artists/artists.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ArtistDetailComponent },
  { path: 'artists', component: ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
