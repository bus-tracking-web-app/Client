import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AuthModule } from './auth/auth.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import{HttpClientModule, HTTP_INTERCEPTORS}from  '@angular/common/http';


import { TestimonialComponent } from './testimonial/testimonial.component';
import { TokenIntercepter } from 'src/Intercepter/token.intercepter';


@NgModule({
  declarations: [
    AppComponent,

  HomeComponent,
    NavbarComponent,
    FooterComponent,

    AboutUsComponent,
    ContactUsComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,  
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercepter,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
