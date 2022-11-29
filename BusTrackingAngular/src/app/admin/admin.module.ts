import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedAdminModule } from '../shared-admin/shared-admin.module';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageRoutesComponent } from './manage-routes/manage-routes.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { ManageSchoolComponent } from './manage-school/manage-school.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageBusComponent,
    ManageUsersComponent,
    CreateUserComponent,
    ManageRoutesComponent,
    CreateRouteComponent,
    ManageTestimonialComponent,
    ManageSchoolComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedAdminModule
  ]
})
export class AdminModule { }
