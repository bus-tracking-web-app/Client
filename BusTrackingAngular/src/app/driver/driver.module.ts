import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedTeacherModule } from '../shared-teacher/shared-teacher.module';



@NgModule({
  declarations: [
    DriverHomeComponent,
    EditProfileComponent,
  ],
  imports: [
    
    CommonModule,
    DriverRoutingModule,
    GoogleMapsModule,
    SharedTeacherModule
  ]
})
export class DriverModule { }
