import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  users: any[] = [];
  role: any[] = [];
  selectedRole: any = {};
  selectedDriver: any = {};
  selectedTeacher: any = {};
  routes: any[] = [];
  testimonial: any[] = [];
  testimonialStatus: any[] = [];
  selectedTestimonialStatus: any = {};
  display_photo: any;
  school: any[] = [];
  selectedbusnumber: any = {};
  selectedbus:any={};

  display_image: any;
  contact: any[] = [];
  baseURL: string = "https://localhost:44364/api/";
  constructor(private http: HttpClient, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  students: any[] = [];
  student_image: any;
  aboutus_image: any;
  about: any[] = [];
  Home: any[] = [];
  home_image: any;
  selectedUser: any = {};
  bus: any[] = [];

  AllUsers()
  {
    this.spinner.show();
    this.http.get(this.baseURL + "users/userwithrole").subscribe((res: any) => {
      this.users = res;
      this.spinner.hide();
      this.toastr.success("This is All Product");
    }, err => {
      this.spinner.hide();
      this.toastr.error("there is no data")
    });
  }

  createuser(body: any) {
    // const dialogRef=  this.dialog.open(this.callDelete);
    body.imagepath = this.display_image;
    this.spinner.show();
    this.http.post(this.baseURL + "users", body).subscribe((resp) => {
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
    this.http.post(this.baseURL + "users/uploadImage", file).subscribe((resp: any) => {
      this.display_image = resp.imagepath;
    }, err => {
      this.toastr.error('Can not Upload Image');
      console.log(err);
    })
  }

  getUserid(id: number) {
    return this.http.get(this.baseURL + "users/" + id).subscribe((res: any) => {
      this.selectedUser = res;
    }, err => {
      this.toastr.error(err.message);
    });
  }



  updateUser(body:any)
  {
    body.imagepath = this.display_image;
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
  deleteUser(id: number) {
    this.spinner.show();
    this.http.delete(this.baseURL + "users/" + id).subscribe((resp: any) => {
      this.spinner.hide();
      this.toastr.success('Deleted Successfully !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }

  AllRole() {
    this.spinner.show();
    this.http.get(this.baseURL + "role").subscribe((res: any) => {
      this.role = res;
      this.spinner.hide();
      this.toastr.success("This is All Role");
    }, err => {
      this.spinner.hide();
      this.toastr.error("there is no data");
    });
  }
  getallrole() {
    return this.http.get(this.baseURL + "role");
  }

  getroleid(id: number) {
    return this.http.get(this.baseURL + "role/" + id).subscribe((res: any) => {
      this.selectedRole = res;
    }, err => {
      this.toastr.error(err.message);
    });
  }
    // ----------------Students Services-----------------
    all: any[] = [];
    getAllbuses(){
      this.spinner.show();
      this.http.get('https://localhost:44364/API/Bus').subscribe((resp: any) => {
        this.bus = resp;
        this.spinner.hide();
        this.toastr.success('Data Retrieved!');
        console.log(resp);
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    getAll(){
      this.http.get('https://localhost:44364/API/Bus/get').subscribe((resp: any) => {
        this.all = resp;
        this.spinner.hide();
        this.toastr.success('Data Retrieved!');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    createBus(body: any){
      this.spinner.show();
      this.http.post('https://localhost:44364/API/Bus', body).subscribe((resp: any) => {
        this.spinner.hide();
        this.toastr.success('Created!');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
    }
    updateBus(body: any){
      this.http.put('https://localhost:44364/API/Bus', body).subscribe((res) => {
        this.toastr.success('Updated!');
      }, err => {
        this.toastr.error(err.message, err.status)
      })
      /* Routes Services */

    }
    deleteBus(id: number){
      this.http.delete('https://localhost:44364/API/Bus/delete/' + id).subscribe((resp) => {
        this.toastr.success('Deleted!');
      }, err => {
        this.toastr.error(err.message, err.status)
      })
    }
    searchByBusNumber(bnum: number){
      this.spinner.show();
      this.http.get('https://localhost:44364/API/Bus/searchByBusNumber/' + bnum).subscribe((resp: any) => {
        this.bus = resp;
        this.spinner.hide();
        this.toastr.success('Search Successfully!');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
    }
    //Footer

footer:any[]=[];
getAllFooter(){
  this.spinner.show();
  this.http.get('https://localhost:44364/API/footer').subscribe((resp:any)=>{
    this.footer=resp;
    this.spinner.hide();
    this.toastr.success('Data Retrieved!');
    console.log(this.footer);
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
updateFooter(body:any){
  this.http.put('https://localhost:44364/API/footer',body).subscribe((res)=>{
    this.toastr.success('Updated!');
  },err=>{
    this.toastr.error(err.message,err.status)
  })
}

    //CREATE BUS
    driver: any[] = [];
    teacher: any[] = [];
    result: any[] = [];
    round:any[]=[];
    selectedRound:any={}
    getDriverAndTeacher(){
      this.http.get('https://localhost:44364/API/users').subscribe((user: any) => {
        this.result = user;
        this.result.forEach((us: any) => {
          if (us.roleid == 21)
            this.teacher.push(us);
          else if (us.roleid == 22)
            this.driver.push(us);
        })
      }, err => {
        this.toastr.error(err.message, err.status)
      })
    }
    getRound(){
      this.http.get('https://localhost:44364/API/Round/get').subscribe((res:any)=>{
        this.round=res;
      },err=>{
        this.toastr.error(err.message,err.status)
      })
    }
    getRoundById(id:number)
    {
      this.http.get('https://localhost:44364/API/Round/GetById/'+id).subscribe((res:any)=>{
        this.selectedRound=res;
      },err=>{
        this.toastr.error(err.message,err.status)
      })
    }
    //Update
    getDriverId(id: number){
      this.http.get('https://localhost:44364/API/users/' + id).subscribe((res: any) => {
        this.selectedDriver = res;
      }, err => {
        this.toastr.error(err.message, err.status)
      })
    }
    getTeacherId(id: number){
      this.http.get('https://localhost:44364/API/users/' + id).subscribe((res: any) => {
        this.selectedTeacher = res;
      }, err => {
        this.toastr.error(err.message, err.status)
      })
    }

    getAllRoutes(){
      this.spinner.show();
      this.http.get('https://localhost:44364/api/Route/getAllRouteDTO').subscribe((resp: any) => {
        this.routes = resp;
        this.spinner.hide();
        this.toastr.success('Routes Retrieved!');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    createRoute(body : any)
    {
      debugger
      this.spinner.show();
      this.http.post('https://localhost:44364/api/Route/CreateRoute', body).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('Route Created !');

      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    updateRoute(body : any)
    {
      this.spinner.show();
      this.http.put('https://localhost:44364/api/Route/UpdateRoute', body).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('Route Updated !')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })

    }
    deleteRoute(id : number)
    {
      this.spinner.show();
      this.http.delete('https://localhost:44364/api/Route/DeleteRoute/' + id).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('Route Deleted');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)

      })
    }
    getRouteById(id : number)
    {
      this.spinner.show();

      this.http.get('https://localhost:44364/api/Route/GetRouteById/' + id).subscribe((resp: any) => {
        this.routes = [resp];
        this.spinner.hide();
        this.toastr.success('Route Retrieved !!');

      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
    }

    /* Testimonial Services*/
    getAllTestimonial(){
      this.spinner.show();
      this.http.get('https://localhost:44364/api/Testimonial/GETALLtestimonialDTO').subscribe((resp: any) => {
        this.testimonial = resp;
        this.spinner.hide();
        this.toastr.success('Testimonial Retrieved!');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    getAllTestimonialStatus(){
      this.http.get('https://localhost:44364/api/Testimonial/GETALLtestimonialStatus').subscribe((resp: any) => {
        this.testimonialStatus = resp;
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    getTestimonialStatusById(id : number)
    {
      debugger
      this.http.get('https://localhost:44364/api/Testimonial/GETtestimonialStatusBYID/' + id).subscribe((resp: any) => {
        this.selectedTestimonialStatus = resp;

      }, err => {
        this.toastr.error(err.message, err.status)
      })
    }


    uploadAttachmentTestimonial(file: FormData) {
      this.http.post("https://localhost:44364/api/Testimonial/uploadImage", file).subscribe((resp: any) => {
        this.display_image = resp.imagepath;
      }, err => {
        this.toastr.error('Can not Upload Image');
        console.log(err);
      })
    }



    updateTestimonial(body : any)
    {
      body.imagepath = this.display_photo;
      this.spinner.show();
      this.http.put('https://localhost:44364/api/Testimonial/UPDATETESTIMONIAL', body).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('Testimonial Updated !')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })

    }

    deleteTestimonial(id : number)
    {
      this.spinner.show();
      this.http.delete('https://localhost:44364/api/Testimonial/Deletetestimonial/' + id).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('Testimonial Deleted');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)

      })
    }

    /* School Services */
    getAllSchool(){
      this.spinner.show();
      this.http.get('https://localhost:44364/api/school/getAllSchool').subscribe((resp: any) => {
        this.school = resp;
        this.spinner.hide();
        this.toastr.success('School Retrieved!');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    uploadAttachmentschool(file: FormData) {
      
      this.http.post("https://localhost:44364/api/school/uploadImage", file).subscribe((resp: any) => {
        this.display_photo = resp.logo;
      }, err => {
        this.toastr.error('Can not Upload Image');
        console.log(err);
      })
    }
    createSchool(body : any)
    {
      body.logo = this.display_photo;

      this.spinner.show();
      this.http.post('https://localhost:44364/api/school/CREATEshcool', body).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('School Created !');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }


    updateSchool(body : any)
    {
      if (this.display_photo != undefined) {
        body.logo = this.display_photo;
      }
  

      this.spinner.show();
      this.http.put('https://localhost:44364/api/school/UPDATEshcool', body).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('School Updated !')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })

    }

    deleteSchool(id : number)
    {
      this.spinner.show();
      this.http.delete('https://localhost:44364/api/school/deleteshcool/' + id).subscribe((resp) => {
        this.spinner.hide();
        window.location.reload();

        this.toastr.success('school Deleted');
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)

      })
    }


// ----------------Students Services-
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


    updateStudent(body: any)
    {
      body.imgpath = this.student_image;
      this.spinner.show();
      this.http.put('https://localhost:44364/api/Student', body).subscribe((resp) => {
        this.spinner.hide();
        this.toastr.success('Updated Successfully !!');
        window.location.reload();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    deleteStudent(id: number)
    {
      this.spinner.show();
      debugger;
      this.http.delete('https://localhost:44364/api/Student/DeleteStudent/' + id).subscribe((resp) => {
        this.spinner.hide();
        this.toastr.success('Deleted Successfully !!');
        window.location.reload();
      }, err => {
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
// End Students Services 

  
  //About us Services 
  uploadAboutusPHoto(file: FormData) {
    this.http.post('https://localhost:44364/api/Aboutus/uploadImageAboutUs/', file).subscribe((resp: any) => {
      this.aboutus_image = resp.imagepath;
    }, err => {
      this.toastr.error('Try again');
      console.log(err);

      })
    }
    updateaboutus(body: any)
    {
      body.imagepath = this.aboutus_image;
      this.spinner.show();
      this.http.put('https://localhost:44364/api/Aboutus', body).subscribe((resp) => {
        this.spinner.hide();
        this.toastr.success('Updated Successfully !!');
        window.location.reload();
      }, err => {
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
   // End About us Services 


    // Home Services
 GetHome()
    {
      this.spinner.show();
      this.http.get('https://localhost:44364/api/Home/Get').subscribe((res: any) => {
        this.Home = res;
        this.spinner.hide();
        this.toastr.success("done");
      }, err => {
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
    if (this.home_image != undefined) {
      body.imagepath = this.home_image;
    }
    body.imagepath = this.home_image;
    this.spinner.show();
    this.http.put(this.baseURL + "role", body).subscribe((resp) => {
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });
  };


  createRole(body: any) {
    this.spinner.show();
    this.http.post(this.baseURL + "role", body).subscribe((resp: any) => {
      this.spinner.hide();
      this.toastr.success('Created !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });
  }

  deleteRole(id: number) {
    this.spinner.show();
    this.http.delete(this.baseURL + "role/" + id).subscribe(resp => {
      this.spinner.hide();
      this.toastr.success('Deleted Successfully !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });
  }



  updateRole(body: any) {
    this.spinner.show();
    this.http.put(this.baseURL + "role", body).subscribe((resp) => {
      this.spinner.hide();
      this.toastr.success('Updated Successfully !!');
      window.location.reload();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    });
  };


  GetAllContact() {
    this.spinner.show();
    this.http.get(this.baseURL + "contact").subscribe((res: any) => {
      this.contact = res;
      this.spinner.hide();
    })
  }
  deletecontact(id: number) {
    this.spinner.show();
    this.http.delete(this.baseURL + "contact").subscribe((res: any) => {
      this.spinner.hide();
      this.toastr.success("deleted successfully")
    }, err => {
      this.spinner.hide();
      this.toastr.error("cant delete contact");
    })
  }

  

 //  End Home Services


 rounds:any[]=[];
 getAllround(){
   this.http.get('https://localhost:44364/api/round/get').subscribe((resp:any)=>{
     this.rounds=resp;
      },err=>{
     this.spinner.hide();
     this.toastr.error(err.message, err.status);
   })
 }

 selectedrounds:any={};
 getroundsid(id:number)
 {
   return this.http.get("https://localhost:44364/api/Round/getById/"+id).subscribe((res:any)=>{
     this.selectedrounds=res;
   },err=>{
     this.toastr.error(err.message);
   });
 }


 selectedbuss:any={};
 getBusid(id:number)
 {
   return this.http.get("https://localhost:44364/api/bus/getById/"+id).subscribe((res:any)=>{
     this.selectedbuss=res;
   },err=>{
     this.toastr.error(err.message);
   });
 }

 studentCount:any;
 stdCount()
 {
   return this.http.get("https://localhost:44364/api/Student/studentcount").subscribe
   ((res:any)=>{
     this.studentCount=res;
   },err=>{
     this.toastr.error(err.message);
   });
 }

 driverCount:any;
parentsCount:any;
 techerCount:any;
 DriverCounter()
 {
   return this.http.get("https://localhost:44364/api/users/dcount").subscribe
   ((res:any)=>{
     this.driverCount=res;
   },err=>{
     this.toastr.error(err.message);
   });
 }
 ParentCounter()
 {
   return this.http.get("https://localhost:44364/api/users/ParentCount").subscribe
   ((res:any)=>{
     this.parentsCount=res;
   },err=>{
     this.toastr.error(err.message);
   });
 }
 TeacherCounter()
 {
   return this.http.get("https://localhost:44364/api/users/tcount").subscribe
   ((res:any)=>{
     this.techerCount=res;
   },err=>{
     this.toastr.error(err.message);
   });
 }


getBusById(id : number)
  {
    
    this.http.get('https://localhost:44364/api/Bus/getById/' + id).subscribe((resp: any) => {
      this.selectedbus = resp;
    }, err => {
      this.toastr.error(err.message, err.status)
    })
  }
}