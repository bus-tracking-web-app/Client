import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HomeService } from '../Services/home.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private home:HomeService) { }

  contactForm=new FormGroup(
    {
      fullName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.email,Validators.required]),
      phoneNumber : new FormControl('',[Validators.minLength(10)]),
      massage:new FormControl('',[Validators.required])

    }
  )
  
  ngOnInit(): void {
  }
  send()
  {
    console.log(this.contactForm.value);
    
    this.home.createContact(this.contactForm.value);
  }
  



}
