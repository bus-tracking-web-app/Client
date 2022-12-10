import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.css']
})
export class ManageTestimonialComponent implements OnInit {

  constructor(public AdminService:AdminService,private toastr:ToastrService,private dialog:MatDialog) { }
  @ViewChild('callUpdateDialog') callUpdateDialog!:TemplateRef<any> 
  @ViewChild('callDeleteDialog') callDeleteDialog!:TemplateRef<any> 
  ngOnInit(): void {
    this.AdminService.getAllTestimonial();
    this.AdminService.getAllTestimonialStatus();
  }

  updateTestimonialForm:FormGroup=new FormGroup({
    id:new FormControl(),
    statusid:new FormControl('',Validators.required)

  })

  DetectChanges(event:any)
  {
    const id=Number(event.target.value);
    this.updateTestimonialForm.controls['statusid'].setValue(id);
  }


  previousData:any={};
  
  updateDialog(obj:any)
  {
    

    this.previousData={
    id:obj.id,
    statusid:obj.statusid,
    }
    this.updateTestimonialForm.controls['id'].setValue(this.previousData.id);
    this.updateTestimonialForm.controls['statusid'].setValue(this.previousData.statusid);
    this.AdminService.getTestimonialStatusById(this.previousData.statusid)
    this.dialog.open(this.callUpdateDialog);
  }

  updateTestimonial()
  {
    this.AdminService.updateTestimonial(this.updateTestimonialForm.value)
  }

  deleteDialog(id :number)
  {
    const dialogref=this.dialog.open(this.callDeleteDialog);
    dialogref.afterClosed().subscribe(result=>
      {
        if(result != undefined)
        {
          if(result=='Yes')
          {
            this.AdminService.deleteTestimonial(id);
          }
          else if(result=='No')
          {
            this.toastr.info('Cancelled')
            
          }
        }
      })


  


}}
