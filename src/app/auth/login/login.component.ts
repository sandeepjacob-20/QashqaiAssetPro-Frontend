import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/model/User';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //declare variables
  loginform!: FormGroup;
  isSubmitted: boolean = false;
  error: string = '';

  loginUser?: User = new User();

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    //create a reactive form
    this.loginform = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  //get controls for validation
  get formControls() {
    return this.loginform.controls;
  }

  //functionality for login
  loginCredentials(): void {
    //setting value of isSubmitted to true
    this.isSubmitted = true;

    //check if form is valid
    if (this.loginform.invalid) {
      this.error = "Please enter username and password";
      return;
    }

    //if form is valid
    if (this.loginform.valid) {
      this.error = "";
      console.log(this.loginform.value);
      //check validation using checking login functionality
      this.authService.loginVerify(this.loginform.value)
        .subscribe(response => {
          console.log(response);
          if (response.data == "INVALID CREDENTIALS") {
            this.error = "Invalid username or password";
          }
          else if (response.data.role == 1) {
            localStorage.setItem('USER_NAME', response.data.UserName);
            localStorage.setItem('ACCESS_ROLE', response.data.role);
            localStorage.setItem('JWT_TOKEN', response.data['ACCESS TOKEN']);
            this.router.navigate(['/home/admin']);
          }
          else if (response.data.role == 2) {
            localStorage.setItem('USER_NAME', response.data.UserName);
            localStorage.setItem('ACCESS_ROLE', response.data.role);
            localStorage.setItem('JWT_TOKEN', response.data['ACCESS TOKEN']);
            this.router.navigate(['/home/user']);
          }
        });
    }
  }

}
