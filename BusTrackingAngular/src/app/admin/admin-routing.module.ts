import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
import { ManageRoutesComponent } from './manage-routes/manage-routes.component';
import { ManageSchoolComponent } from './manage-school/manage-school.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { MangeAboutUsComponent } from './mange-about-us/mange-about-us.component';
import { MangeHomeComponent } from './mange-home/mange-home.component';
import { MangeStudentComponent } from './mange-student/mange-student.component';
import { ReportComponent } from './report/report.component';

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
    component:MangeAboutUsComponent}
    ,{
    path:'footer',
    component:ManageFooterComponent
    },

 
  {
    path:'routes',
    component:ManageRoutesComponent
  },
  {
    path:'Testimonial',
    component:ManageTestimonialComponent
  },
  {
    path:'school',
    component:ManageSchoolComponent
  },
  {
    path:'report',
    component:ReportComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
