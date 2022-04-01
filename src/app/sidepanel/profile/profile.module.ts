import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({

  imports : [ProfileRoutingModule],
  exports : [RouterModule],
  declarations: [
    UserComponent,
    AdminComponent,
    ManagerComponent,
  ],
  
})
export class ProfileModule { }
