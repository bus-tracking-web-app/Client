
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplateBinding } from '@angular/compiler';
import { CreateStudentComponent } from '../create-student/create-student.component';

@Component({
  selector: 'app-mange-student',
  templateUrl: './mange-student.component.html',
  styleUrls: ['./mange-student.component.css']
})
export class MangeStudentComponent implements OnInit {

  p_data :any={};
  
  constructor(private spinner: NgxSpinnerService,
    public home:AdminService, private dialog:MatDialog) { }
   
    @ViewChild('callUdateStudentDailog') callUdateDailog!:TemplateRef<any>;
    @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>;
   
   
    updateForm:FormGroup=new FormGroup({
      id:new FormControl('',Validators.required),
      fullname:new FormControl('',Validators.required),
      imgpath:new FormControl(),
      xhome:new FormControl('',Validators.required),
      yhome:new FormControl('',Validators.required),
     inbusstatus:new FormControl(''),
     round: new FormControl('',Validators.required),
     parentid: new FormControl('',Validators.required),
    busid:new FormControl('',Validators.required)
  })

  DetectChangesParent(event:any)
  {
    const id=Number(event.target.value);
    this.updateForm.controls['parentid'].setValue(id);
  }

  DetectChangesBus(event:any)
  {
    const id=Number(event.target.value);
    this.updateForm.controls['busid'].setValue(id);
  }

  DetectChangesround(event:any)
  {
    const id=Number(event.target.value);
    this.updateForm.controls['round'].setValue(id);
  }

  ngOnInit(): void {
    this.home.GetAllStudent();
    this.home.getParent();
    this.home.getAllbuses();
    this.home.getAllround();
    
  }

  opendialog(){
    this.dialog.open(CreateStudentComponent)
  //  this.dialog.open(createForm)
  }
  
  openUpdateDailog(obj:any){

    this.p_data={
      id:obj.id,
      fullname:obj.fullname,
      imgpath:obj.imgpath,
      xhome:obj.xhome,
      yhome:obj.yhome,
      inbusstatus:obj.inbusstatus,
      round:obj.round,
      parentid:obj.parentid,
      busid:obj.busid
    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.updateForm.controls['imgpath'].setValue(this.p_data.imgpath);
    this.updateForm.controls['parentid'].setValue(this.p_data.parentid);
    this.updateForm.controls['busid'].setValue(this.p_data.busid);
    this.updateForm.controls['round'].setValue(this.p_data.round);
    this.updateForm.controls['inbusstatus'].setValue(this.p_data.inbusstatus);
    this.home.getUserid(this.p_data.parentid);
    this.home.getBusid(this.p_data.busid);
    this.home.getroundsid(this.p_data.round);
    this.dialog.open(this.callUdateDailog);
  }

  saveData(){
    this.home.createStudent(this.updateForm.value)
  }
 
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0] 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.home.uploadAttachmentStudent(formdata);
  }
  
  updateStudent(){
    this.home.updateStudent(this.updateForm.value)
  }

  openDeleteDialog(id:number){
    console.log(id)
    const dialogRef=this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined){
        if(result=='Yes')
        this.home.deleteStudent(id);
        else if(result=='No')
        console.log(id)
      }
    })
      }


}



