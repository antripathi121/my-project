import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { View1Component } from 'projects/appAdmin/src/app/view1/view1.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { RoleGuardService } from './guards/role-guard.service';
import { Calendar1Component } from './admin/calendar1/calendar1.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReportsComponent } from './admin/reports/reports.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'adminlogin', component: AdminLoginComponent},
{path: 'admin', component: AdminComponent,

//  canActivate: [AuthGuardService],
// canActivate: [RoleGuardService, AuthGuardService],
    // data: {role: 'Admin'},
    
    children: [
                { path: 'calendar', component: Calendar1Component },
                { path: 'reports', component: ReportsComponent },
              ]
    
  },


    // {path: 'admin',
    // children: [
    //     {
    //         path: 'calendar',
    //         component: Calendar1Component
    //     },] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
