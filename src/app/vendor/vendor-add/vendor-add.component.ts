import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {

  constructor(public vendorService:VendorService,private router:Router) { }

  ngOnInit(): void {
    //get all assets
    this.vendorService.getAllAssets();
  }
  //Insert
  insertVendor(form?:NgForm){
    console.log("Inserting...");
    this.vendorService.insertVendor(form.value).subscribe(
      (response)=>{console.log(response);},
      (error)=>{
        console.log(error);
      }
    )
  }
//Submit form
onSubmit(form:NgForm){
  console.log(form.value)
  //insert
  this.insertVendor(form);
  form.resetForm();
  this.router.navigateByUrl("/vendors/list")
  //this.rouer.navigate([url])
  
}
}
