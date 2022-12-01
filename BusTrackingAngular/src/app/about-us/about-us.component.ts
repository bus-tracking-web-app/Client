import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( public home:HomeService) { }

  ngOnInit(): void {
    this.home.GetAboutUs();
  }

}
