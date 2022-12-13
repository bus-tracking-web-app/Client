import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/Services/admin.service';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public home: HomeService) { }

  ngOnInit(): void {
    this.home.GetHome();
    this.home.GetAboutUs();
    this.home.getApprovedTestimonial();
    this.home.getAllFooter();
  }


}



