import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageRoutesComponent } from './manage-routes/manage-routes.component';
import { ManageSchoolComponent } from './manage-school/manage-school.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
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
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
