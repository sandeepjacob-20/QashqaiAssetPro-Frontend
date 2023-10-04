import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  LogOut(): void {
    console.log("Logout");
    this.authService.logOut();
  }
}
