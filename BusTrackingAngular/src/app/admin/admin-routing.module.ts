import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

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
    path:'role',
    component:ManageRoleComponent
  },
  {
    path:'contact',
    component:ManageContactComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
