import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JSONRequest } from 'src/assets/dashboard/vendors/tinymce/tinymce';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css']
})
export class ManageRoleComponent implements OnInit {

  p_data:any={};
  role:any[]=[];
  data:any={};
  @ViewChild('callCreateDailog') callCreate!:TemplateRef<any>
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
roleForm:FormGroup=new FormGroup
({
        id:new FormControl(),
        rolename: new FormControl('',Validators.required),
});

  constructor(public service:AdminService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllRole();
  }

  getAllRole()
  {
    this.service.AllRole();
  }
  openCreatedialog()
  {
    this.dialog.open(this.callCreate);
  }

  openUpdateDailog(item:any)
  {
    this.p_data={
      id:item.id,
      rolename:item.rolename
    }
    this.roleForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);

  }
  openDeleteDailog(id:number)
  {
    
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          this.service.deleteRole(id);
        }
          else if(result=='no')
          console.log('thank you ');
      }
    });

  }

  saveData()
  {
     this.roleForm.controls['rolename'].value
     this.data={
      rolename:this.roleForm.controls['rolename'].value
     };
     console.log(this.data);
    this.service.createRole(this.data);
  }
  updateData()
  {
    this.service.updateRole(this.roleForm.value);
    console.log(this.roleForm.value);
  }

}
