import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './history/history.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
    path:"parent",
    component:ParentHomeComponent
  },
  {
    path:"children",
    component:ChildrenComponent
  },
  {
    path:"history/:id",
    component:HistoryComponent
  },
  {
    path:"editprofile",
    component:EditProfileComponent
  },
  {
    path:"testimonial",
    component:TestimonialComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
