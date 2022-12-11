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
  baseURL: string = "https://localhost:44364/api/";
  display_image: any;
  User:any;

  constructor(private http: HttpClient , private toastr:ToastrService,private spinner:NgxSpinnerService) { }
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


  updateUser(body:any)
  {
     if (this.display_image != undefined) {
       body.imagepath = this.display_image;
     }
    
    this.spinner.show();
    this.http.put(this.baseURL + "users", body).subscribe((resp: any) => {
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });
  }

    getUserid(id: number) {
      return this.http.get(this.baseURL + "users/" + id).subscribe((res: any) => {
        this.User = res;
      }, err => {
        this.toastr.error(err.message);
      });
    }

    uploadAttachmentUser(file: FormData) {
      this.http.post(this.baseURL + "users/uploadImage", file).subscribe((resp: any) => {
        this.display_image = resp.imagepath;
      }, err => {
        this.toastr.error('Can not Upload Image');
        console.log(err);
      })
    }


}
