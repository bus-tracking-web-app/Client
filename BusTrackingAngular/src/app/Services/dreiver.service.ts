import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DreiverService {
  busStudents:any=[];
  busRoute:any=[];

  constructor(private http: HttpClient) { }
  getStudentByDriverId(id:number)
  {
    this.http.get('https://localhost:44364/api/Student/GetStudentByBusId/'+id).subscribe((res: any) => {
      this.busStudents = res;

    }, err => {
    });
  }
  GetBusRouteByDriverId(driverId:number)
  {
    this.http.get('https://localhost:44364/api/route/GetBusRouteByDriverId/'+driverId).subscribe((res: any) => {
      this.busRoute = res;

    }, err => {
    });
  }
  SetCurentBusLocation(body : any)
  {
    this.http.post( "https://localhost:44364/api/route/SetBusLocation", body).subscribe((resp) => {
    }, err => {
    });


  }
  UpdateStudentBusStatus(lathome :any)
  {
    this.http.get( "https://localhost:44364/api/student/UpdateStudentBusStatus/"+ lathome).subscribe((resp) => {
    }, err => {
    });
  }
  UpdateAllStudentStatus()
  {
    this.http.get( "https://localhost:44364/api/student/UpdateAllStudentStatus/").subscribe((resp) => {
    }, err => {
    });

  }
  SetCureenBusLocationAftreEnf(dreiverid : number)
  {
    this.http.get( "https://localhost:44364/api/route/SetCureenBusLocationAftreEnf/"+dreiverid).subscribe((resp) => {
    }, err => {
    });

  }



}
