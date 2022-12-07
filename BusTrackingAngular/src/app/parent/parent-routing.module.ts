import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentHomeComponent } from './parent-home/parent-home.component';

const routes: Routes = [
  {
    path:"Parent",
    component:ParentHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
