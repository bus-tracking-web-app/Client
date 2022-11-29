import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  attendance:any[]=[];
  getAllAttendance(){
    this.spinner.show();
    this.http.get('https://localhost:44364/API/Attendance').subscribe((resp:any)=>{
      this.attendance=resp;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
  createAttendance(body:any){
    this.spinner.show();
    this.http.post('https://localhost:44364/API/Attendance',body).subscribe((resp:any)=>{
      this.spinner.hide();
      this.toastr.success('Created!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status)
    })
  }

  updateAttendance(body:any){
    this.http.put('https://localhost:44364/API/Attendance',body).subscribe((res)=>{
      this.toastr.success('Updated!');
    },err=>{
      this.toastr.error(err.message,err.status)
    })
  
  }

  deleteAttendance(id:number){
    this.http.delete('https://localhost:44364/API/Attendance/delete/'+id).subscribe((resp)=>{
    this.toastr.success('Deleted!');
    },err=>{
    this.toastr.error(err.message,err.status)
    })
    }

}
