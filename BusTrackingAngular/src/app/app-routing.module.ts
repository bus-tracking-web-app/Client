import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
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
    loadChildren:()=>AdminModule
  },
  {
    path:'teacher',
    loadChildren:()=>TeacherModule
 
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
