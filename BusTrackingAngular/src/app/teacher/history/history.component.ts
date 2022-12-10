import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../Services/Attendence.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public att:TeacherService) { }

  ngOnInit(): void {
    this.att.getAllAttendance()
  }

}
