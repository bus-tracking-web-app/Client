import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { async, isEmpty, map, window } from 'rxjs';
import { AdminService } from 'src/app/admin/Services/admin.service';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService,private admin:AdminService) { }
  attendance:any[]=[];
  Allattendance:any[]=[];
  getAllAttendance(){
    this.spinner.show();
    this.http.get('https://localhost:44364/API/Attendance').subscribe((resp:any)=>{
      this.Allattendance=resp;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
  //CREATE ATTENDANCE
  student:any[]=[];
  bus:any[]=[];
  status:any[]=[];
  getStudent(){
    this.http.get('https://localhost:44364/API/student/get').subscribe((res:any)=>{
    this.student=res;
  },err=>{
    this.toastr.error(err.message,err.status)
  })
  }
  getBus(){
    this.http.get('https://localhost:44364/API/bus').subscribe((res:any)=>{
    this.bus=res;
  },err=>{
    this.toastr.error(err.message,err.status)
  })
  }
  getStatus(){
    this.http.get('https://localhost:44364/API/attendance/getStatus').subscribe((res:any)=>{
      this.status=res;
    },err=>{
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
  //UPDATE ATTENDANCE
  selectedStudent:any={};
  selectedBus:any={};
  selectedStatus:any={};
  getStudentId(id:number){
    this.http.get('https://localhost:44364/API/student/getById/'+id).subscribe((res:any)=>{
    this.selectedStudent=res;
  },err=>{
    this.toastr.error(err.message,err.status)
  })
  }
getBusId(id:number){
  this.http.get('https://localhost:44364/API/bus/getById/'+id).subscribe((res:any)=>{
    this.selectedBus=res;
  },err=>{
    this.toastr.error(err.message,err.status)
  })
}
getStatusId(id:number){
  this.http.get('https://localhost:44364/API/attendance/getStatusById/'+id).subscribe((res:any)=>{
    this.selectedStatus=res;
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

   getAttendenceToday()
    {
      let date=new Date();
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = date.getFullYear();
      let today = yyyy +'-'+mm+'-'+ dd ;

       this.http.get("https://localhost:44364/API/Attendance/getByDate/"+today).subscribe(async (res:any)=>{
        if (res.length==0) {await this.createAttendance();}
        else {this.attendance=res};

        
       },err=>{
        this.toastr.error(err.message,err.status);
       });
     }

     
  async createAttendance(){
    this.spinner.show()
    let CreateAttendence ={};
    let date=new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let today = yyyy +'-'+mm+'-'+ dd ;
      
    
    this.http.get('https://localhost:44364/API/student/get').subscribe( async (res:any)=>{
    
    for (const stu of res) {
      CreateAttendence=
      {
        studentid:stu.id,
        busid:stu.busid,
        dateofattendance:today,
        attendancestatus:2
      }
      
      await this.http.post('https://localhost:44364/API/Attendance',CreateAttendence).toPromise();
    }
        this.spinner.hide();
        location.reload();
        

    })
    
  }
  
    
}
