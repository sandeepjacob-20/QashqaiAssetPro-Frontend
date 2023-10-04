import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/User';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router:Router) { }

  //for authenticating the user
  public loginVerify(user: User): Observable<any> {

    //call webAPI for checking username and password
    return this.httpClient.get<User>(environment.apiURL +
      '/api/login/' + user.userName + '&' + user.password);
  };

  // for logout
  public logOut() {

    //clear all local and session storage keys
    localStorage.removeItem('USER_NAME');
    localStorage.removeItem('ACCESS_ROLE');
    localStorage.removeItem('JWT_TOKEN');

    //redirect to login
    this.router.navigate(['auth/login']);
  }

}
