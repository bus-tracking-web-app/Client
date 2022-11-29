import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
users:any[]=[];
role:any[]=[];
selectedRole:any={};
display_image: any;
contact:any[]=[];
baseURL:string="https://localhost:44364/api/";
  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) 
  { }

  AllUsers()
  {
    this.spinner.show();
      this.http.get(this.baseURL+"users/userwithrole").subscribe((res:any)=>{
      this.users=res;
      this.spinner.hide();
      this.toastr.success("This is All Product");
    },err=>{
      this.spinner.hide();
      this.toastr.error("there is no data")
    });
  }

  createuser(body: any) 
  {
    body.imagepath = this.display_image;
    this.spinner.show();
    this.http.post(this.baseURL+"users", body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toastr.success('Created !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });
  }
  uploadAttachmentUser(file: FormData) {
    this.http.post(this.baseURL+"users/uploadImage", file).subscribe((resp: any) => {
      this.display_image = resp.imagepath;
    }, err => {
      this.toastr.error('Can not Upload Image');
      console.log(err);
    })
  }

  updateUser(body:any)
  {
    if (this.display_image != undefined) {
      body.imagepath = this.display_image;
    }

    this.spinner.show();
    this.http.put(this.baseURL+"users",body).subscribe((resp:any)=>{
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });

  }
deleteUser(id:number)
{
  this.spinner.show();
  this.http.delete(this.baseURL+"users/"+id).subscribe((resp:any)=>{
    this.spinner.hide();
    this.toastr.success('Deleted Successfully !!');
    window.location.reload();
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}

AllRole()
{
  this.spinner.show();
      this.http.get(this.baseURL+"role").subscribe((res:any)=>{
      this.role=res;
      this.spinner.hide();
      this.toastr.success("This is All Role");
    },err=>{
      this.spinner.hide();
      this.toastr.error("there is no data");
    });
}
getallrole()
{
  return this.http.get(this.baseURL+"role");
}

getroleid(id:number)
{
  return this.http.get(this.baseURL+"role/"+id).subscribe((res:any)=>{
    this.selectedRole=res;
  },err=>{
    this.toastr.error(err.message);
  });
}

updateRole(body:any)
  {
    this.spinner.show();
    this.http.put(this.baseURL+"role",body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
    window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });  
};


createRole(body: any) 
{
  this.spinner.show();
  this.http.post(this.baseURL+"role", body).subscribe((resp:any) => {
    this.spinner.hide();
    this.toastr.success('Created !!');
    window.location.reload();
  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  });
}

deleteRole(id:number)
{
  this.spinner.show();
  this.http.delete(this.baseURL+"role/"+id).subscribe(resp=>{
    this.spinner.hide();
    this.toastr.success('Deleted Successfully !!');
    window.location.reload();
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  });
}

GetAllContact()
{
  this.spinner.show();
  this.http.get(this.baseURL+"contact").subscribe((res:any)=>{
    this.contact=res;
    this.spinner.hide();    
  })
}
deletecontact(id:number)
{
  this.spinner.show();
  this.http.delete(this.baseURL+"contact").subscribe((res:any)=>{
    this.spinner.hide();
    this.toastr.success("deleted successfully")
  },err=>{
    this.spinner.hide();
    this.toastr.error("cant delete contact");
  })
}

}