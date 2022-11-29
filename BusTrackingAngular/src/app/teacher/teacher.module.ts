import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { SharedTeacherModule } from '../shared-teacher/shared-teacher.module';


@NgModule({
  declarations: [
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedTeacherModule
  ]
})
export class TeacherModule { }
