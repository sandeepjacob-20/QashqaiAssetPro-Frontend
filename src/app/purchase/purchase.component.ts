import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  LogOut(): void{
    console.log("Logout");
    this.authService.logOut();
  }
}
