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

  ngOnInit(): void {
    this.parentServices.getParentStudents(75)
    }


    // userLocalStorage:any=localStorage.getItem('user'); 
    // userInfo:any=JSON.parse(this.userLocalStorage);
    ViewAttendance(id:number)
    {

    }
}
