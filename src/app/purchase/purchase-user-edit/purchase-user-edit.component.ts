import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-purchase-user-edit',
  templateUrl: './purchase-user-edit.component.html',
  styleUrls: ['./purchase-user-edit.component.scss']
})
export class PurchaseUserEditComponent implements OnInit {

  constructor(public purchaseService:PurchaseService, private router:Router) { }

  ngOnInit(): void {
    this.purchaseService.getAllAssetsTypes();
    this.purchaseService.getAllAssets();
    this.purchaseService.getAllVendors();
  }
//update

updateOrders(form?:NgForm){
  console.log("Editing...");

  this.purchaseService.updateOrders(form.value).subscribe(
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
this.updateOrders(form);
form.resetForm();
this.router.navigateByUrl("/purchase/list")
}
}
