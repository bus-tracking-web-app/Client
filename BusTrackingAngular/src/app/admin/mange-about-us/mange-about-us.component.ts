import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mange-about-us',
  templateUrl: './mange-about-us.component.html',
  styleUrls: ['./mange-about-us.component.css']
})
export class MangeAboutUsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    public home:AdminService, private dialog:MatDialog) { }
  @ViewChild('callUpdatAboutUsDailog') callUdateDailog!:TemplateRef<any>
  
  p_data :any={};

  updateAboutusForm:FormGroup=new FormGroup({
    id:new FormControl('',Validators.required),
    imagepath:new FormControl('',Validators.required),
    title:new FormControl(''),
    information:new FormControl('',Validators.required)
})

 
  ngOnInit(): void {
    this.home.GetAboutUs();
  }
 

  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0] 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.home.uploadAboutusPHoto(formdata);
  }

  openUpdateaboutDailog(obj:any){

    this.p_data=
    {
    id:obj.id,
    information:obj.information,
    imagepath:obj.imagepath,
    title:obj.title
    }
    this.updateAboutusForm.controls['id'].setValue(this.p_data.id);
    // this.updateForm.controls['imgpath'].setValue(this.p_data.imgpath);
    this.dialog.open(this.callUdateDailog);
  }


  
  updateAbout(){
    this.home.updateaboutus(this.updateAboutusForm.value)
  }
}

