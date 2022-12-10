import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { SharedTeacherModule } from '../shared-teacher/shared-teacher.module';
import { HistoryComponent } from './history/history.component';
import { ArrivalEmailComponent } from './arrival-email/arrival-email.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AttendanceComponent,
    HistoryComponent,
    ArrivalEmailComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedTeacherModule
  ]
})
export class TeacherModule { }
