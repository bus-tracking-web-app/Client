import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService) { }

    
    loginForm=new FormGroup(
    {
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    }
  )

  
  isChecked :boolean=false;
    
    save(){
      // if(this.isChecked==true){
      this.auth.login(this.loginForm.value);
        
    }
    
  ngOnInit(): void {
  }
 
  
  

}
