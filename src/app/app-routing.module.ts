import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TaskComponent } from './task/task.component';
import { AdminComponent } from './admin/admin.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: TaskComponent },
  { path: 'admin', component: AdminComponent },

  {
    path: 'sidepanel', component: SidepanelComponent,
    loadChildren: () =>
      import("./sidepanel/sidepanel.module").then((m) => m.SidepanelModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
