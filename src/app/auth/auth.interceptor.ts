import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercepting here")
    // if login, not checking jwt 
    console.log(request.url)
    if (request.url.includes('api/users')) {  //by pass login
      console.log("not checking Jwt")
    }
    //else
    else {
      //get jwt
      let token = localStorage.getItem('JWT_TOKEN')

      //checking access role and jwtToken
      if (localStorage.getItem('ACCESS_ROLE') && (localStorage.getItem('JWT_TOKEN'))) {
        const newRequest = request.clone(
          {
            setHeaders: {
              Authorization: `${token}`
            }
          }
        );
        console.log(token)
        // if jwt is there
        return next.handle(newRequest);
      }
      // console.log(token)
    }
    //else not authorized
    return next.handle(request);
  }
}
