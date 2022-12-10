import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-school',
  templateUrl: './manage-school.component.html',
  styleUrls: ['./manage-school.component.css']
})
export class ManageSchoolComponent implements OnInit {

  constructor(public AdminService:AdminService,private toastr:ToastrService,private dialog:MatDialog) { }
  @ViewChild('callUpdateDialog') callUpdateDialog!:TemplateRef<any> 
  @ViewChild('callDeleteDialog') callDeleteDialog!:TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog!:TemplateRef<any>

  ngOnInit(): void {
    this.AdminService.getAllSchool();
  }
 

  updateSchoolForm:FormGroup=new FormGroup({
    id:new FormControl(),
    logo:new FormControl(),
    xschool:new FormControl('',Validators.required),
    yschool:new FormControl('',Validators.required),

  })

  createSchoolForm : FormGroup = new FormGroup({
    logo:new FormControl(),
    xschool:new FormControl(),
    yschool:new FormControl(),
  })


  createDialog()
  {
    this.dialog.open(this.callCreateDialog);
  }

  createSchool()
  {
    this.AdminService.createSchool(this.createSchoolForm.value);
  }
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]//the first image 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.AdminService.uploadAttachmentschool(formdata);
  }


  previousData:any={};
  updateDialog(obj:any)
  {
    this.previousData={
    id:obj.id,
    logo:obj.logo,
    xschool:obj.xschool,
    yschool:obj.yschool,
    }
    this.updateSchoolForm.controls['id'].setValue(this.previousData.id);
    this.updateSchoolForm.controls['logo'].setValue(this.previousData.logo);
    this.dialog.open(this.callUpdateDialog);
  }


  updateSchool()
  {
    
    this.AdminService.updateSchool(this.updateSchoolForm.value)
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
            this.AdminService.deleteSchool(id);
          }
          else if(result=='No')
          {
            this.toastr.info('Cancelled')
            
          }
        }
      })



}
}
