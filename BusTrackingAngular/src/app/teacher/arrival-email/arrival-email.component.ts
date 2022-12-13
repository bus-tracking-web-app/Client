import { Component, OnInit } from '@angular/core';
import { ParentemailService } from '../Services/parentemail.service';

@Component({
  selector: 'app-arrival-email',
  templateUrl: './arrival-email.component.html',
  styleUrls: ['./arrival-email.component.css']
})
export class ArrivalEmailComponent implements OnInit {

  constructor(public parent:ParentemailService) { }
  userLocalStorage:any=localStorage.getItem('user'); 
  userInfo:any=JSON.parse(this.userLocalStorage);
  id=Number(this.userInfo.nameid) 
  
  ngOnInit(): void {
  this.parent.getAllStudentWithParentEmail(this.id);
  }

  send(obj:any)
  {
    console.log(obj);
    this.parent.ParentEmail(obj);
  }

}
