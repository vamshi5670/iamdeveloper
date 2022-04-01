import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [

  // path: '',
  // component: SidepanelComponent,
  // children: [
  //   { path: '', redirectTo: 'profile', pathMatch: 'full' },
  //   { path: 'profile', component: ProfileComponent },
  //   { path: 'aboutUs', component: AboutUsComponent },
  //   { path: 'dashboard', component: DashboardComponent },

  // ]
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: 'profile', component: ProfileComponent,

    loadChildren: () =>
      import("./profile/profile.module").then((o) => o.ProfileModule),

  },
  { path: 'aboutUs', component: AboutUsComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((n) => n.DashboardModule),
  },
  // ];
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidepanelRoutingModule { }
