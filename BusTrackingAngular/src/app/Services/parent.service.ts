import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  parentChaild:any=[];
  attendanceChaild:any=[];
  schoolData:any=[];
  baseURL: string = "https://localhost:44364/api/";
  display_image: any;
  User:any;
  testimonial:any[]=[];



  constructor(private http: HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
  getParentStudents(id :number)
{
  this.http.get( "https://localhost:44364/api/student/getParentStudents/"+id).subscribe((resp) => {
    this.parentChaild=resp;
    
  }, err => {
  });
}
GetattendanceByStudentId(id :number)
{
  this.http.get( "https://localhost:44364/api/Attendance/GetByStudentId/"+id).subscribe((resp) => {
    this.attendanceChaild=resp;
    console.log(resp);
    
    // console.log(this.attendanceChaild);
    
  }, err => {
  });
}



getSchoolData()
{
  this.http.get( "https://localhost:44364/api/school/getAllSchool/").subscribe((resp) => {
    this.schoolData=resp;
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

  getAllTestimonial(){
    this.spinner.show();
    this.http.get('https://localhost:44364/api/Testimonial/GETALLtestimonialDTO').subscribe((resp: any) => {
      this.testimonial = resp;
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
  


}
