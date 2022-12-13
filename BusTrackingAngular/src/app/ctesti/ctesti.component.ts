import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-ctesti',
  templateUrl: './ctesti.component.html',
  styleUrls: ['./ctesti.component.css']
})
export class CTestiComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getApprovedTestimonial();
  }

}
