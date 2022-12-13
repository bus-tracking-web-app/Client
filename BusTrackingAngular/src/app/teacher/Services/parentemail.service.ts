import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ParentemailService {
todayPrecent:any[]=[];
constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

getAllStudentWithParentEmail(id:number)
{
  this.spinner.show();
  let date=new Date();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();
  let today = yyyy +'-'+mm+'-'+ dd ;
  console.log(today)
  this.http.get('https://localhost:44364/API/Attendance/StudentInfo/'+today+"/"+id).subscribe((res:any)=>{
    this.todayPrecent=res;
    this.spinner.hide();
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message,err.status);
  })
}

ParentEmail(email:string)
{
  this.spinner.show();
  this.http.get('https://localhost:44364/API/Attendance/SendEmail/'+email).subscribe(res=>{
    this.spinner.hide();
    this.toastr.success("email sent to child parent successfully");
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message,err.status);
  })
}

}


