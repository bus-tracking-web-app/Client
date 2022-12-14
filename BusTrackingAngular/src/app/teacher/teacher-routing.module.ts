import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalEmailComponent } from './arrival-email/arrival-email.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {
    path:'attendance',
    component:AttendanceComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path:'parentemail',
    component:ArrivalEmailComponent
  },
  {
    path:'EditProfile',
    component:EditProfileComponent
  }
  
  

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
