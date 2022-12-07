import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    ParentHomeComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    GoogleMapsModule
  ]
})
export class ParentModule { }
