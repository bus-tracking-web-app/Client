import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor(public parentServices : ParentService) { }
  userLocalStorage:any=localStorage.getItem('user'); 
  userInfo:any=JSON.parse(this.userLocalStorage);

  ngOnInit(): void {
    this.parentServices.getParentStudents(this.userInfo.nameid)
    }
    ViewAttendance(id:number)
    {
      this.parentServices.GetattendanceByStudentId(id);

    }
}
