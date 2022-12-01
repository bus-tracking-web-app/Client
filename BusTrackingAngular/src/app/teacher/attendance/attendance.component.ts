import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TeacherService } from '../Services/teacher.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(public home:TeacherService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.getAllAttendance();
    this.home.getBus();
    this.home.getStatus();
    this.home.getStudent();
  }

  createform:FormGroup=new FormGroup({
    studentid:new FormControl('',Validators.required),
    busid:new FormControl('',Validators.required),
    dateofattendance:new FormControl('',Validators.required),
    attendancestatus:new FormControl('',Validators.required)
})

saveAttendance(){
  this.home.createAttendance(this.createform.value);
}
DetectChanges(event:any)
{
  const id=Number(event.target.value);
  this.createform.controls['studentid'].setValue(id);
  console.log(event.target.value);
}
DetectChanges1(event:any)
{
   const id=Number(event.target.value);
   console.log(event.target.value);
  this.createform.controls['busid'].setValue(id);
}
DetectChanges2(event:any)
{
   const id=Number(event.target.value);
   console.log(event.target.value);
  this.createform.controls['attendancestatus'].setValue(id);
}
@ViewChild('CallCreate') CallCreate!:TemplateRef<any>;
openCreateDialog(){
const dialogRef=this.dialog.open(this.CallCreate)
}

updateform:FormGroup=new FormGroup({
  id:new FormControl(),
  studentid:new FormControl(),
  busid:new FormControl(),
  dateofattendance:new FormControl(),
  attendancestatus:new FormControl()
})

@ViewChild('CallUpdate') CallUpdate!:TemplateRef<any>;
  p_data:any={};
  openUpdateDialog(obj:any){
this.p_data={
  id:obj.id,
  stdN:obj.studentid,
  busid:obj.busid,
  adate:obj.dateofattendance,
  astatus:obj.attendancestatus
}
this.updateform.controls['id'].setValue(this.p_data.id);
this.updateform.controls['studentid'].setValue(this.p_data.stdN);
this.updateform.controls['busid'].setValue(this.p_data.busid);
this.updateform.controls['dateofattendance'].setValue(this.p_data.adate);
this.updateform.controls['attendancestatus'].setValue(this.p_data.astatus);
this.home.getStudentId(this.p_data.stdN);
this.home.getBusId(this.p_data.busid);
this.home.getStatusId(this.p_data.astatus);
this.dialog.open(this.CallUpdate);

  }
  DetectUpdateChanges(event:any){
    const id=Number(event.target.value);
    console.log(event.target.value);
   this.updateform.controls['studentid'].setValue(id);
  }
  DetectUpdateChanges1(event:any){
    const id=Number(event.target.value);
    console.log(event.target.value);
   this.updateform.controls['busid'].setValue(id);
  }
  DetectUpdateChanges2(event:any){
    const id=Number(event.target.value);
    console.log(event.target.value);
   this.updateform.controls['attendancestatus'].setValue(id);
  }
  updateAttendance(){
    this.home.updateAttendance(this.updateform.value);
  }

  @ViewChild('DeleteDialog') DeleteDialog!:TemplateRef<any>;
  openDeleteDialog(id:number){
const dialogRef=this.dialog.open(this.DeleteDialog);
dialogRef.afterClosed().subscribe((result)=>{
  if(result!=undefined){
    if(result=='yes')
    this.home.deleteAttendance(id);
    else if(result=='no')
    console.log('Thank you')
  }
})
  }

}
