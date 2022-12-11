import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path:"driver",
    component:DriverHomeComponent
  },
  {
    path:"editprofile",
    component:EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
