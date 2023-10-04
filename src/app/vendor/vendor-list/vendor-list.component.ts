import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/shared/model/vendor';
import {VendorService} from 'src/app/shared/services/vendor.service'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  searchTerm='';
  page:number=1;
pageSize=2;
  constructor(public vendorService:VendorService,private router:Router) { }

  ngOnInit(): void {
    console.log("HIIIIIIIIIIII im in vendor-list component")
    //listing all vendors
    this.vendorService.getAllVendors();
  }
  //update vendor
  updateVendor(vendor:Vendor){
    console.log(vendor);
    this.populateVendorData(vendor);
    this.router.navigate(['vendors/edit',vendor.vendorId])
  }
  //getting vendor data
  populateVendorData(vendor:Vendor){
    this.vendorService.formVendorData=Object.assign({},vendor)//converting employee(only string) to object as formdata is object
  }

  //disable vendor
  disableVendor(_id:number){
    if(confirm('Are you sure you want to DELETE this record?')){
      this.vendorService.disableVendor(_id)
       .subscribe(
         (response)=>{
           console.log(response)
           this.vendorService.getAllVendors();
         },
         (error)=>{
           console.log(error)    
         }
       )
    }
  }
}
