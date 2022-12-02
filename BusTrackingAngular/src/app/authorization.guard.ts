import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private toastr: ToastrService, private routr: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      
      if (state.url.indexOf('admin') >= 0) {

        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '1') {
            this.toastr.success('Welcome admin'+user.unique_name);
            return true;
          }
          else {
            this.toastr.warning('Sorry , this page for admin');
            this.routr.navigate(['']);
            localStorage.clear();
            return false;
          }

        }
        else {
          this.toastr.warning('Sorry , this page for admin');
          this.routr.navigate(['auth/login']);
          return false;
        }

      }

      else if(state.url.indexOf('teacher') >= 0)
      {
        
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '21') {
            this.toastr.success('Welcome Teacher '+user.unique_name);
            return true;
          }
          else {
            this.toastr.warning('Sorry , this page for teacher');
            this.routr.navigate(['']);
            localStorage.clear();
            return false;
          }

        }
        else {
          this.toastr.warning('Sorry , this page for teacher');
          this.routr.navigate(['auth/login']);
          return false;
        }
      }

      
      else if(state.url.indexOf('parent') >= 0)
      {
        
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '41') {
            this.toastr.success('Welcome Parent '+user.unique_name);
            return true;
          }
          else {
            this.toastr.warning('Sorry , this page for parent');
            this.routr.navigate(['']);
            localStorage.clear();
            return false;
          }

        }
        else {
          this.toastr.warning('Sorry , this page for parent');
          this.routr.navigate(['auth/login']);
          return false;
        }
      }
      else if(state.url.indexOf('driver') >= 0)
      {
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '22') {
            this.toastr.success('Welcome Driver '+user.unique_name);
            return true;
          }
          else {
            this.toastr.warning('Sorry , this page for Driver');
            this.routr.navigate(['']);
            localStorage.clear();
            return false;
          }

        }
        else {
          this.toastr.warning('Sorry , this page for teacher');
          this.routr.navigate(['auth/login']);
          return false;
        }
      }
      


      return true;
    }

    else {
      this.routr.navigate(['auth/login']);
      this.toastr.warning('Please Login');
      return false;
    }

  }

}
