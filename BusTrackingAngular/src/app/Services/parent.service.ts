import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  parentChaild:any=[];
  schoolData:any=[];


  constructor(private http: HttpClient) { }
  getParentStudents(id :number)
{
  this.http.get( "https://localhost:44364/api/student/getParentStudents/"+id).subscribe((resp) => {
    this.parentChaild=resp;
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


}
