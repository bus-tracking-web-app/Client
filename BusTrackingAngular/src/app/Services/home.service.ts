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
  
  

  getAllbuses(){
    this.spinner.show();
    this.http.get('https://localhost:44364/API/Bus').subscribe((resp:any)=>{
      this.bus=resp;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!');
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
      this.toastr.success("Page retrieved successfully");
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
      this.toastr.success("Page retrieved successfully");
    },err=>{
      this.spinner.hide();
      this.toastr.error("there is no data")
    });
  }
}
