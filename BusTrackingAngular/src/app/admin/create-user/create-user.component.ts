import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
createform:FormGroup=new FormGroup
({
      fullname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      imagepath: new FormControl(),
      roleid: new FormControl('',Validators.required),
});
role:any=[];

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.AllRole();
  }

  saveData()
  {
    this.service.createuser(this.createform.value);
  }
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]//the first image 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.service.uploadAttachmentUser(formdata);
  }

  AllRole()
  {
    this.service.getallrole().subscribe((res:any)=>{
      this.role=res;
      console.log(this.role);
      
    })
  }
  

}
