import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private toastr: ToastrService) { }
    
  canActivate(next: ActivatedRouteSnapshot): boolean{

    const currentRole = localStorage.getItem('ACCESS_ROLE');
    const expectedRole = next.data.role;

    //check condition
    if (currentRole != expectedRole) {

      this.toastr.error("unauthorized access");
      localStorage.removeItem('USER_NAME');
      localStorage.removeItem('ACCESS_ROLE');
      localStorage.removeItem('JWT_TOKEN');
      this.router.navigate(['auth/login']);
      return false;
    }
    
    return true;
  }
  
}
