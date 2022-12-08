import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';

const routes: Routes = [
  {
    path:"Parent",
    component:ParentHomeComponent
  },
  {
    path:"children",
    component:ChildrenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
