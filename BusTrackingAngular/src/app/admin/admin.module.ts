import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedAdminModule } from '../shared-admin/shared-admin.module';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MangeStudentComponent } from './mange-student/mange-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MangeHomeComponent } from './mange-home/mange-home.component';
import { MangeAboutUsComponent } from './mange-about-us/mange-about-us.component';
import { CreatebusComponent } from './createbus/createbus.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
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
    MangeStudentComponent,
    CreateStudentComponent,
    MangeHomeComponent,
    MangeAboutUsComponent,
    CreatebusComponent,
    ManageFooterComponent,
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
