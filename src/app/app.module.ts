import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TaskComponent } from './task/task.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { LeftpanelComponent } from './sidepanel/leftpanel/leftpanel.component';
import { RightpanelComponent } from './sidepanel/rightpanel/rightpanel.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './sidepanel/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TaskComponent,
    LoginPageComponent,
    AdminComponent,
    SidepanelComponent,
    LeftpanelComponent,
    RightpanelComponent,
   

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,ReactiveFormsModule,
    FormsModule,DashboardModule,
    AppRoutingModule, 
    // RouterModule.forRoot([
    //   { path: 'signup', component: TaskComponent },

    //   { path: 'login', component: LoginPageComponent },
    //   { path: 'admin', component: AdminComponent },
    //   { path: 'sidepanel', component: SidepanelComponent },

    //   { path: 'profile', component: ProfileComponent },
      
    //   { path: 'sidepanel', 
    //   component: SidepanelComponent,
    // children :[

    //   { path: 'left', component: LeftpanelComponent },
    //   { path: 'right', component: RightpanelComponent },

    // ] },

    // ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
