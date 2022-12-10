import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    DriverHomeComponent
  ],
  imports: [
    
    CommonModule,
    DriverRoutingModule,
    GoogleMapsModule
  ]
})
export class DriverModule { }
