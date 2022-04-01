import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ManagerComponent } from "./manager/manager.component";
import { UserComponent } from "./user/user.component";

const profileRoutes: Routes = [

    { path:'',redirectTo:'admin',pathMatch:'full'},
    { path:'admin',component: AdminComponent },
    { path: 'manager', component: ManagerComponent},
    { path: 'user', component: UserComponent},

]

@NgModule(
    {
        imports: [RouterModule.forChild(profileRoutes)],
    }
)

export class ProfileRoutingModule {}