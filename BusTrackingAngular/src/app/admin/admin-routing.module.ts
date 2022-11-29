import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { MangeAboutUsComponent } from './mange-about-us/mange-about-us.component';
import { MangeHomeComponent } from './mange-home/mange-home.component';
import { MangeStudentComponent } from './mange-student/mange-student.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'bus',
    component:ManageBusComponent
  },
  {
    path:'users',
    component:ManageUsersComponent
  },
  {
    path:'student',
    component:MangeStudentComponent
  },
  {
    path:'home_mange',
    component:MangeHomeComponent
  },
  {
    path:'aboutus_mange',
    component:MangeAboutUsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
