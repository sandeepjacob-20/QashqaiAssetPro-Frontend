import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-editorders',
  templateUrl: './editorders.component.html',
  styleUrls: ['./editorders.component.scss']
})
export class EditordersComponent implements OnInit {

  constructor(public purchaseService: PurchaseService, private router: Router) { }

  ngOnInit(): void {
    this.purchaseService.getAllAssetsTypes();
    this.purchaseService.getAllAssets();
    this.purchaseService.getAllVendors();
    this.purchaseService.getAllStatus();
  }
  //update

  updateOrders(form?: NgForm) {
    console.log("Editing...");

    this.purchaseService.updateOrders(form.value).subscribe(
      (response) => { console.log(response); },
      (error) => {
        console.log(error);
      }
    )
  }
  //Submit form
  onSubmit(form: NgForm) {
    console.log(form.value)
    //insert
    this.updateOrders(form);
    form.resetForm();
    this.router.navigateByUrl("/purchase/list")
  }
}
