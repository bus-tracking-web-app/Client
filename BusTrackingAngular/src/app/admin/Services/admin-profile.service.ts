import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  baseURL: string = "https://localhost:44364/api/";
  display_image: any;
  User:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
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
