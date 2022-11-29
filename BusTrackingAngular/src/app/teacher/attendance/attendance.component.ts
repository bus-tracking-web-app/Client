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
DetectChanges(event:any)
{
   const id=Number(event.target.value);
   console.log(event.target.value);
  this.updateform.controls['busdriver'].setValue(id);
}
@ViewChild('callUpdate') callUpdate!:TemplateRef<any>;
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
this.dialog.open(this.callUpdate);

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
