import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.css']
})
export class ManageContactComponent implements OnInit {

contactForm:FormGroup=new FormGroup
({
  fullname:new FormControl('',Validators.required),
  phonenumber:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  massage:new FormControl('',Validators.required),
});

  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.getAllContact();
  }

  getAllContact()
  {
    this.service.GetAllContact();
  }

  }


