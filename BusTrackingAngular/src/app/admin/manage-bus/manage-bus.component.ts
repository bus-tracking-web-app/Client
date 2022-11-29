import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-bus',
  templateUrl: './manage-bus.component.html',
  styleUrls: ['./manage-bus.component.css']
})
export class ManageBusComponent implements OnInit {

constructor(private spinner: NgxSpinnerService,public home:AdminService) {
this.spinner.show();
setTimeout(() => {
/** spinner ends after 5 seconds */
this.spinner.hide();
}, 2500);
   }

  ngOnInit(): void {
    this.home.getAllbuses();
  }

}
