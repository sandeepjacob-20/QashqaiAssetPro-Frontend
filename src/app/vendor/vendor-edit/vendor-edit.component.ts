import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/services/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  constructor(public vendorService:VendorService,private router:Router) { }

  ngOnInit(): void {
  }
  updateVendor(form?:NgForm){
    console.log("Editing...");
    this.vendorService.updateVendor(form.value).subscribe(
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
  this.updateVendor(form);
  form.resetForm();
  this.router.navigateByUrl("/vendors/list")
}
}
