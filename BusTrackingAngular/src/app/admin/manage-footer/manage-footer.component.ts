import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-footer',
  templateUrl: './manage-footer.component.html',
  styleUrls: ['./manage-footer.component.css']
})
export class ManageFooterComponent implements OnInit {

  constructor(public home:AdminService,private dialog :MatDialog) { }

  ngOnInit(): void {
    this.home.getAllFooter()
  }
  updateform:FormGroup=new FormGroup({
    id:new FormControl(),
    abouttxt:new FormControl(),
    address:new FormControl(),
    phonenumber:new FormControl(),
    email:new FormControl()
    
  })
  @ViewChild('callUpdateFooter') callUpdateFooter!:TemplateRef<any>;
p_data:any={};
  openUpdateDialog(obj:any){
    this.p_data={
      id:obj.id,
      Text:obj.abouttxt,
      address:obj.address,
      phonenumber:obj.phonenumber,
      email:obj.email
    }
    this.updateform.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdateFooter);
  }
  updateFooter(){
    this.home.updateFooter(this.updateform.value);
  }

}
