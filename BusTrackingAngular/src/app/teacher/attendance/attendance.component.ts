import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/Services/admin.service';
import { TeacherService } from '../Services/Attendence.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {


  constructor(public home: TeacherService,private tosatr:ToastrService) { }
  ngOnInit(): void {
    this.home.getAttendenceToday();
    
  }

  precent(obj:any)
  {
  let  precentAttendence=
      {
        id:obj.id,
        studentid:obj.studentid,
        busid:obj.busid,
        dateofattendance:obj.dateofattendance,
        attendancestatus:1
      }
      this.home.updateAttendance(precentAttendence);

  }
  
  absent(obj:any)
  {
    let precentAttendence=
      {
        id:obj.id,
        studentid:obj.studentid,
        busid:obj.busid,
        dateofattendance:obj.dateofattendance,
        attendancestatus:2
      }
      this.home.updateAttendance(precentAttendence);
  }
  saveAttendence()
  {
    window.location.reload();
    this.tosatr.success("Updated Successfully");
  }
}
