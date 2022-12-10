import { Component, OnInit } from '@angular/core';
import { ParentemailService } from '../Services/parentemail.service';

@Component({
  selector: 'app-arrival-email',
  templateUrl: './arrival-email.component.html',
  styleUrls: ['./arrival-email.component.css']
})
export class ArrivalEmailComponent implements OnInit {

  constructor(public parent:ParentemailService) { }

  ngOnInit(): void {
  this.parent.getAllStudentWithParentEmail();
  }

  send(obj:any)
  {
    console.log(obj);
    this.parent.ParentEmail(obj);
  }

}
