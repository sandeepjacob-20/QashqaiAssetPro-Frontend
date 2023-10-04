import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/shared/services/purchase.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public purchaseService: PurchaseService, private router: Router) { }

  ngOnInit(): void {
    this.purchaseService.getAllOrders();
    this.purchaseService.getAllVendors();
    this.purchaseService.getAllAssetsTypes();
    this.purchaseService.getAllAssets();

  }
<<<<<<< HEAD

  addOrder (form?: NgForm){
  console.log("Inserting............");
  this.purchaseService.insertOrder(form.value).subscribe(
    (response)=>{
      console.log(response);
    },
    (error) =>{
      console.log(error)
    }
=======
  addOrder(form?: NgForm) {
    console.log("Inserting............");
    this.purchaseService.insertOrder(form.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }
>>>>>>> b0874863795a46cdfef46b96a8040c1d66013cd9

    )

  }
  //submot form
  onSubmit(form: NgForm) {
    console.log(form.value);
    //insert
    this.addOrder(form);
    form.resetForm();
    this.router.navigateByUrl("purchase/list")
  }
}


