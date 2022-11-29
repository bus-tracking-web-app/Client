import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
users:any[]=[];
display_image: any;
baseURL:string="https://localhost:44364/api/";
  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) 
  { }

  students:any[]=[];
  student_image: any;
  aboutus_image: any;
  about:any[]=[];
  Home:any[]=[];
  home_image: any;
  selectedUser:any={};
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

  AllUsers()
  {
    this.spinner.show();
      this.http.get(this.baseURL+"users").subscribe((res:any)=>{
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
    // const dialogRef=  this.dialog.open(this.callDelete);
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

  getUserid(id:number)
  {
    return this.http.get(this.baseURL+"users/"+id).subscribe((res:any)=>{
      this.selectedUser=res;
    },err=>{
      this.toastr.error(err.message);
    });
  }

  getBusid(id:number)
  {
    return this.http.get(this.baseURL+"users/"+id).subscribe((res:any)=>{
      this.selectedUser=res;
    },err=>{
      this.toastr.error(err.message);
    });
  }

  updateUser(body:any)
  {
    body.imagepath = this.display_image;
    this.spinner.show();
    this.http.put(this.baseURL+"users",body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
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
getallrole()
{
  return this.http.get(this.baseURL+"role");
}

// ----------------Students Services-----------------


GetAllStudent(){
  this.spinner.show();
  this.http.get('https://localhost:44364/api/Student/Get').subscribe((resp:any)=>{
  this.students=resp;
  this.spinner.hide();
  this.toastr.success('Data Retrieved!');
   },err=>{
  this.spinner.hide();
  this.toastr.error(err.message, err.status);
  })
}
  
  createStudent(body: any)
   {
    body.imgpath = this.student_image;
    this.spinner.show();
    // debugger
    this.http.post('https://localhost:44364/api/Student', body).subscribe((resp) => {
      console.log(resp);
    
      this.spinner.hide();
      this.toastr.success('Created !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    )
  }


  uploadAttachmentStudent(file: FormData) {
    this.http.post('https://localhost:44364/api/Student/uploadImage/', file).subscribe((resp: any) => {
      this.student_image = resp.imgpath;
    }, err => {
      this.toastr.error('Try again');
      console.log(err);

    })
  }


  updateStudent(body:any)
  {
    body.imgpath = this.student_image;
    this.spinner.show();
    this.http.put('https://localhost:44364/api/Student',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }

  deleteStudent(id:number)
  {
    this.spinner.show();
    debugger;
    this.http.delete('https://localhost:44364/api/Student/DeleteStudent/'+id).subscribe((resp)=>{
      this.spinner.hide();
        this.toastr.success('Deleted Successfully !!');
        window.location.reload();
    },err=>{
      this.spinner.hide();
       this.toastr.error(err.message, err.status);
    })
  }

  parent:any[]=[];
  pare:any[]=[];
  getParent()
  {
   
      this.http.get('https://localhost:44364/api/users').subscribe((res:any)=>{
      this.pare=res;
     this.pare.forEach((p:any)=>{
  if(p.roleid==41)
  this.parent.push(p);
})
     
    },err=>{
  
      this.toastr.error("there is no data")
    });
  }

  // ---------------------- End Students Services --------------------

  
  // ------------------------- About us Services ---------------------

 
  uploadAboutusPHoto(file: FormData) {
    this.http.post('https://localhost:44364/api/Aboutus/uploadImageAboutUs/', file).subscribe((resp: any) => {
      this.aboutus_image = resp.imagepath;
    }, err => {
      this.toastr.error('Try again');
      console.log(err);

    })
  }
  updateaboutus(body:any)
  {
    body.imagepath = this.aboutus_image;
    this.spinner.show();
    this.http.put('https://localhost:44364/api/Aboutus',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }

  GetAboutUs()
  {
    this.spinner.show();
      this.http.get('https://localhost:44364/api/Aboutus/Get').subscribe((res:any)=>{
      this.about=res;
      this.spinner.hide();
      this.toastr.success("done");
    },err=>{
      this.spinner.hide();
      this.toastr.error("there is no data")
    });
  }

   // ---------------------- End About us Services --------------------


    // ---------------------- Home Services --------------------




    GetHome()
    {
      this.spinner.show();
        this.http.get('https://localhost:44364/api/Home/Get').subscribe((res:any)=>{
        this.Home=res;
        this.spinner.hide();
        this.toastr.success("done");
      },err=>{
        this.spinner.hide();
        this.toastr.error("there is no data")
      });
    }
    


  upload_Home_Photo(file: FormData) {
    this.http.post('https://localhost:44364/api/Home/uploadImageHome/', file).subscribe((resp: any) => {
      this.home_image = resp.imagepath;
    }, err => {
      this.toastr.error('Try again');
      console.log(err);

    })
  }
  updateHome(body:any)
  {
    body.imagepath = this.home_image;
    this.spinner.show();
    this.http.put('https://localhost:44364/api/Home',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }

 // ---------------------- End Home Services --------------------
  
}

