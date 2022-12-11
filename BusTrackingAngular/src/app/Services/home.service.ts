import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private toastr:ToastrService,private http:HttpClient,private spinner:NgxSpinnerService) { }
  bus:any[]=[];
  Home:any[]=[];
  about:any[]=[];
  approvedtestimonial:any[]=[];

  
  

  display_photo: any;
  getAllbuses(){
    this.spinner.show();
    this.http.get('https://localhost:44364/API/Bus').subscribe((resp:any)=>{
      this.bus=resp;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
  
  GetHome()
  {
    this.spinner.show();
      this.http.get('https://localhost:44364/api/Home/Get').subscribe((res:any)=>{
      this.Home=res;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toastr.error("there is no data")
    });
  }
  
  GetAboutUs()
  {
    this.spinner.show();
      this.http.get('https://localhost:44364/api/Aboutus/Get').subscribe((res:any)=>{
      this.about=res;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toastr.error("there is no data")
    });
  }
  createTestimonial(body :any)
{  
  body.imagepath=this.display_photo;
  this.spinner.show();
  this.http.post('https://localhost:44364/api/Testimonial/CREATEtestimonial',body).subscribe((resp)=>{
  this.spinner.hide();
  window.location.reload();

    this.toastr.success('Testimonial Created !');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}

  uploadAttachmentTestimonial(file: FormData) {
    this.http.post("https://localhost:44364/api/Testimonial/uploadImage", file).subscribe((resp: any) => {
      this.display_photo = resp.imagepath;
    }, err => {
      this.toastr.error('Can not Upload Image');
      console.log(err);
    })
  }
  getApprovedTestimonial(){
    this.spinner.show();
    this.http.get('https://localhost:44364/api/testimonial/getApprovedTestimonial').subscribe((resp: any) => {   
      this.approvedtestimonial=resp;
      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }}



