import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http:HttpClient) { }
 teacherCount:any={};
 driverCount:any={};
 studentCount:any={};
 parentCount:any={};

  getChartInfo(){
return this.http.get('https://localhost:44364/API/bus/busAndStudentCount')
 

  }
  getTeacherCount(){
    this.http.get('https://localhost:44364/API/users/tcount').subscribe((resp:any)=>{
      this.teacherCount=resp;
    })
  }
  getDriverCount(){
    this.http.get('https://localhost:44364/API/users/dcount').subscribe((resp:any)=>{
      this.driverCount=resp;
    })
  }
  getStudentCount(){
    this.http.get('https://localhost:44364/API/student/studentcount').subscribe((resp:any)=>{
      this.studentCount=resp;
    })
  }
  getParentCount(){
this.http.get("https://localhost:44364/api/users/ParentCount").subscribe((resp:any)=>{
  this.parentCount=resp;
})
  }

}
