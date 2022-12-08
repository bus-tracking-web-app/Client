import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ChildrenComponent } from './children/children.component';
import { SharedParentModule } from '../shared-parent/shared-parent.module';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    ParentHomeComponent,
    ChildrenComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    GoogleMapsModule,
    SharedParentModule
  ]
})
export class ParentModule { }
