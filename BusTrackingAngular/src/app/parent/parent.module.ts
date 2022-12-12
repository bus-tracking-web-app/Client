import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ChildrenComponent } from './children/children.component';
import { SharedParentModule } from '../shared-parent/shared-parent.module';
import { HistoryComponent } from './history/history.component';
import { TeacherModule } from '../teacher/teacher.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedTeacherModule } from '../shared-teacher/shared-teacher.module';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    ParentHomeComponent,
    ChildrenComponent,
    HistoryComponent,
    EditProfileComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    GoogleMapsModule,
    SharedParentModule,
    SharedTeacherModule
  ]
})
export class ParentModule { }
