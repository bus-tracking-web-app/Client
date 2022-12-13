import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService,public home:AdminService,private spinner:NgxSpinnerService) { }
  createForm:FormGroup=new FormGroup({
    fullname:new FormControl('',Validators.required),
    imgpath:new FormControl(''),
    xhome:new FormControl('',Validators.required),
    yhome:new FormControl('',Validators.required),
   inbusstatus:new FormControl(''),
   round: new FormControl('',Validators.required),
   parentid: new FormControl('',Validators.required),
  busid:new FormControl('',Validators.required)
})



  ngOnInit(): void {
    
   this.home.getAll(); //for buses
   this.home.getAllround();
  }

  saveData(){

    this.createForm.controls['inbusstatus'].setValue('true');
    this.home.createStudent(this.createForm.value)
  }
 
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0] 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.home.uploadAttachmentStudent(formdata);
  }

  DetectChangesParent(event:any)
  {
    const id=Number(event.target.value);
    this.createForm.controls['parentid'].setValue(id);
  }


 DetectChangesBus(event:any)
  {
    const id=Number(event.target.value);
    this.createForm.controls['busid'].setValue(id);
  }
  
  DetectChangesround(event:any)
  {
    const id=Number(event.target.value);
    this.createForm.controls['round'].setValue(id);
  }
  
//   parent:any[]=[];
//   pare:any[]=[];
//   getParent()
//   {
//     this.spinner.show();
//       this.http.get('https://localhost:44364/api/users').subscribe((res:any)=>{
//       this.pare=res;
//      this.pare.forEach((p:any)=>{
//   if(p.roleid==41)
//   this.parent.push(p);
// })
     
//     },err=>{
//       this.spinner.hide();
//       this.toastr.error("there is no data")
//     });
//   }

}
