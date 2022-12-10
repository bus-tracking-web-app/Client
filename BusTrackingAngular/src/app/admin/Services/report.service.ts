import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  attendance:any[]=[];
  dtTrigger:Subject<any>=new Subject<any>();
  getAllAttendance(){
    this.spinner.show();
    this.http.get('https://localhost:44364/API/Attendance').subscribe((resp:any)=>{
      this.attendance=resp;
      this.dtTrigger.next(null);
      this.spinner.hide();
      this.toastr.success('Data Retrieved!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }


}
