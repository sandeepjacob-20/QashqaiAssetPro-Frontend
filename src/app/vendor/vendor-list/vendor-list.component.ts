import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VendorService} from 'src/app/shared/services/vendor.service'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  constructor(public vendorService:VendorService,private router:Router) { }

  ngOnInit(): void {
    console.log("HIIIIIIIIIIII im in vendor-list component")
    this.vendorService.getAllVendors();
  }

}
