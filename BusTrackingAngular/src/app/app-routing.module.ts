import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DriverModule } from './driver/driver.module';
import { HomeComponent } from './home/home.component';
import { ParentModule } from './parent/parent.module';
import { TeacherModule } from './teacher/teacher.module';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  {
    path:'contactus',
    component:ContactUsComponent
  },
   {
  path:'',
  component: HomeComponent
  },
  {
  
    path:'aboutus',
    component:AboutUsComponent
  },
  {
  path: 'auth',
  loadChildren: () => AuthModule
  },
  {
    path:'admin',
    loadChildren:()=>AdminModule,
     canActivate:[AuthorizationGuard]
  },
  {
    path:'teacher',
    loadChildren:()=>TeacherModule,
     canActivate:[AuthorizationGuard]
 
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'driver',
    loadChildren:()=>DriverModule,
    canActivate:[AuthorizationGuard]
  },
  {
    path:'parent',
    loadChildren:()=>ParentModule,
    canActivate:[AuthorizationGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
