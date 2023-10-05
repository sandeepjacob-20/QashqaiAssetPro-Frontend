import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  LogOut(): void {
    console.log("Logout");
    this.authService.logOut();
  }
}
