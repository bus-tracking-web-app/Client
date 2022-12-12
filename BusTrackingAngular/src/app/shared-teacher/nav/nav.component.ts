import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditprofileService } from 'src/app/teacher/Services/editprofile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,public edit:EditprofileService) { }

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
