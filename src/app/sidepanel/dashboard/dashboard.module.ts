import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({

  imports: [DashboardRoutingModule],
  exports: [RouterModule],
  declarations: [
    Child1Component,
    Child2Component,
    Child3Component,
    DashboardComponent,
  ],
 
  
})
export class DashboardModule { }
