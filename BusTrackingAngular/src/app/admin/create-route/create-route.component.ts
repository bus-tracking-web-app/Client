import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {


  constructor(public admin:AdminService) { }
  createRouteForm:FormGroup=new FormGroup({
    xcurrent:new FormControl(''),
    ycurrent:new FormControl(''),
    xstart:new FormControl('',Validators.required),
    ystart:new FormControl('',Validators.required),
    xend:new FormControl('',Validators.required),
    yend:new FormControl('',Validators.required),
    busid:new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    this.admin.getAllbuses
  }
  
  createRoute()
  {
    debugger
    this.admin.createRoute(this.createRouteForm.value);

  }
  
  DetectChanges(event:any)
  {
    const id=Number(event.target.value);
    this.createRouteForm.controls['busid'].setValue(id);
    console.log(event.target.value);
  }
}