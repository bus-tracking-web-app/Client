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

}
