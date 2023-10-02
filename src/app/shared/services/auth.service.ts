import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //for authenticating the user
  public loginVerify(user: User): Observable<any> {

    //call webAPI for checking username and password
    return this.httpClient.get<User>(environment.apiURL +
      '/api/login/' + user.userName + '&' + user.password);
  };
}
