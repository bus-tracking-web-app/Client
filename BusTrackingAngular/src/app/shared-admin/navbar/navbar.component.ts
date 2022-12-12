import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfileService } from 'src/app/admin/Services/admin-profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public edit:AdminProfileService) { }

  userLocalStorage:any=localStorage.getItem('user'); 
  userInfo:any=JSON.parse(this.userLocalStorage);
  
 
 

   ngOnInit(): void {
     this.edit.getUserid(this.userInfo.nameid);
   }

Logout()
{
  localStorage.clear();
  this.router.navigate(["auth/login"])

}


}
