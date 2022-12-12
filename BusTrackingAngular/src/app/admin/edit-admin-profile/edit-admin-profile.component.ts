import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminProfileService } from '../Services/admin-profile.service';

@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.css']
})
export class EditAdminProfileComponent implements OnInit {

  updateForm:FormGroup=new FormGroup
  ({
          id:new FormControl(),
          fullname: new FormControl('',Validators.required),
          email: new FormControl('',Validators.required),
          username: new FormControl('',Validators.required),
          password:new FormControl('',Validators.required),
          phone: new FormControl('',Validators.required),
          imagepath: new FormControl(),
          roleid: new FormControl('',Validators.required),
  });
  
  
 userLocalStorage:any=localStorage.getItem('user'); 
 userInfo:any=JSON.parse(this.userLocalStorage);
 
constructor(public edit:AdminProfileService) { }



  ngOnInit(): void {
    this.edit.getUserid(this.userInfo.nameid);
  }

  
    uploadFile(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0]//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
       this.edit.uploadAttachmentUser(formdata);
    }

    saveData()
    {
    
      this.updateForm.controls['id'].setValue(this.edit.User.id);
      this.updateForm.controls['roleid'].setValue(this.edit.User.roleid);
      this.updateForm.controls['imagepath'].setValue(this.edit.User.imagepath);

      this.edit.updateUser(this.updateForm.value);
    }
  

}
