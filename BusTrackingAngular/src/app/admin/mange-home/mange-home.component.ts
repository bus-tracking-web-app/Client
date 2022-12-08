import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-mange-home',
  templateUrl: './mange-home.component.html',
  styleUrls: ['./mange-home.component.css']
})
export class MangeHomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    public home:AdminService, private dialog:MatDialog) { }
  @ViewChild('callUpdatHomeDailog') callUdateDailog!:TemplateRef<any>
  
  p_data :any={};

  updateHomeForm:FormGroup=new FormGroup({
    id:new FormControl('',Validators.required),
    imagepath:new FormControl('',Validators.required),
    titel:new FormControl(''),
    txt:new FormControl('',Validators.required)
})

  ngOnInit(): void {
    this.home.GetHome();
  }
 

  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0] 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.home.upload_Home_Photo(formdata);
  }

  openUpdateHomeDailog(obj:any){

    this.p_data={
      id:obj.id,
      imagepath:obj.imagepath,
      titel:obj.titel,
      txt:obj.txt
    }
    this.updateHomeForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUdateDailog);
  }


  
  updateHome(){
    this.home.updateHome(this.updateHomeForm.value)
  }
}
