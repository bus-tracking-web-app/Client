import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/Services/admin.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public footer:AdminService) { }

  ngOnInit(): void {
    this.footer.getAllFooter();
    
  }

}
