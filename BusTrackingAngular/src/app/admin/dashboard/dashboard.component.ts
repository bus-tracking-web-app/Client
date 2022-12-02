import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.service.stdCount();
    this.service.TeacherCounter();
    this.service.ParentCounter();
    this.service.DriverCounter();
  }

}
