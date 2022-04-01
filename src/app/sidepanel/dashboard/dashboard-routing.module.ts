import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { Child3Component } from "./child3/child3.component";

const routes: Routes = [


    { path:'',redirectTo:'child1',pathMatch:'full'},
    { path:'child1',component: Child1Component },
    { path:'child2',component: Child2Component },
    { path:'child3',component: Child3Component },
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
