import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public HomeServices : HomeService) { }

  ngOnInit(): void {
  }
  testimonialForm=new FormGroup(
    {
      name : new FormControl('',[Validators.required]),
      imagepath : new FormControl(),
      feedback : new FormControl('',[Validators.required]),
      statusid:new FormControl()

    }
  )
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]//the first image 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.HomeServices.uploadAttachmentTestimonial(formdata);
  }

  

  send()
  {
    console.log(this.testimonialForm.value);

    this.testimonialForm.controls['statusid'].setValue(1);
    this.HomeServices.createTestimonial(this.testimonialForm.value);
    
  }


}
