import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { X } from 'chart.js/dist/chunks/helpers.core';
import { AdminService } from 'src/app/admin/Services/admin.service';
import { HomeService } from 'src/app/Services/home.service';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public HomeServices : HomeService,public user :ParentService) { }
  userLocalStorage:any=localStorage.getItem('user'); 
  userInfo:any=JSON.parse(this.userLocalStorage);
  rated:boolean=false;
  ngOnInit(): void {
    this.user.getUserid(this.userInfo.nameid);
    this.user.getAllTestimonial();
    
    setTimeout(() => {
      const testi=(this.user.testimonial).find(x=>x.name==this.userInfo.unique_name);
      console.log(testi)
      if(Object.keys(testi).length === 0)
      {
        this.rated=true;
      }
    }, 3000);
      
    
  }
  testimonialForm=new FormGroup(
    {
      name : new FormControl(''),
      imagepath : new FormControl(),
      feedback : new FormControl('',[Validators.required]),
      statusid:new FormControl()
    }
  )
  

  send()
  {
    
    this.testimonialForm.controls['name'].setValue(this.user.User.username);
    this.testimonialForm.controls['imagepath'].setValue(this.user.User.imagepath);
    this.testimonialForm.controls['statusid'].setValue(1);
    this.HomeServices.createTestimonial(this.testimonialForm.value); 
  }
  

}
