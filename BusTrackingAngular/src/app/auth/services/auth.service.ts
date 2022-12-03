import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = "https://localhost:44364/api/";
  constructor(private http: HttpClient, private toastr: ToastrService, private spinner: NgxSpinnerService,private router:Router) { }

  login(user:any)
  {
    const headeDir=
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOption={
      headers:new HttpHeaders(headeDir)
    }

    this.http.post(this.baseURL+"users/login",user,requestOption).subscribe((res:any)=>{
      const responce={
        token :res.toString()
      }
      console.log(responce);
       localStorage.setItem("token",responce.token);
       let data:any=jwt_decode(responce.token);
       console.log(data);
       localStorage.setItem("user",JSON.stringify({...data}));
       if (data.role=="1") this.router.navigate(["admin/users"]);
       else if(data.role=="21") this.router.navigate([""]);
       else if (data.role=="44") this.router.navigate([""]);
       else if (data.role=="22") this.router.navigate([""]); 
    },err=>{
      this.toastr.error("please enter a valid username and password");
    });

  }
}
