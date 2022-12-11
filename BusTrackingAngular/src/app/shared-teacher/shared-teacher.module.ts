import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SidDriverComponent } from './sid-driver/sid-driver.component';
import { SidParentComponent } from './sid-parent/sid-parent.component';



@NgModule({
  declarations: [
    NavComponent,
    SideComponent,
    SidDriverComponent,
    SidParentComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule
  ],
  exports:[
    NavComponent,
    SideComponent,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    SidDriverComponent,
    SidParentComponent,
  ]
})
export class SharedTeacherModule { }
