import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

    
    loginForm=new FormGroup(
    {
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    }
  )

  
  isChecked :boolean=false;
    
    save(){
      if(this.isChecked==true){
      localStorage.setItem('user',JSON.stringify(this.loginForm.value));
      
    }else
    {
      localStorage.clear();
    }
    }
    check(){
      this.isChecked=!this.isChecked;
    }
  ngOnInit(): void {
  }
 
  
  

}
