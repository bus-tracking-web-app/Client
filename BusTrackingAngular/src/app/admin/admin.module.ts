import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedAdminModule } from '../shared-admin/shared-admin.module';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageBusComponent,
    ManageUsersComponent,
    CreateUserComponent,
    ManageRoleComponent,
    ManageContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedAdminModule
  ]
})
export class AdminModule { }
