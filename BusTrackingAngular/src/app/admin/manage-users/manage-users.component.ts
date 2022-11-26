import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users:any[]=[];
  constructor(public service:AdminService,private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  
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

  
  ngOnInit(): void {
    this.service.AllUsers();
  }

  opendialog() {
    this.dialog.open(CreateUserComponent)
  }

  
  p_data :any={};

  openUpdateDailog(obj:any)
  { 
    this.p_data={
      id:obj.id,
      fullname: obj.fullname,
      email:obj.email,
      username:obj.email,
      password:obj.password,
      phone:obj.phone,
      imagepath: obj.imagepath,
      roleid:obj.roleid
  };
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);  
}
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]//the first image 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.service.uploadAttachmentUser(formdata);
  }

  saveData(){
    this.service.updateUser(this.updateForm.value);
    console.log(this.updateForm.value);
    
  }
  openDeleteDailog(id:number)
  {
    console.log("the item id is :"+id);
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          this.service.deleteUser(id);
        }
          else if(result=='no')
          console.log('thank you ');
      }
    });
  }
  

}
