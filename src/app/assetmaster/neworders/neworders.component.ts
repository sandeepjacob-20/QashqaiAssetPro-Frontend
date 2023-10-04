import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/shared/model/purchase';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-neworders',
  templateUrl: './neworders.component.html',
  styleUrls: ['./neworders.component.scss']
})
export class NewordersComponent implements OnInit {

  constructor(public purchaseService: PurchaseService, private router: Router) { }

  ngOnInit(): void {
     this.purchaseService.getAllOrders();
  }

  //getting order data
  populateOrderData(purchase: Purchase) {
    this.purchaseService.formOrderData = Object.assign({}, purchase)//converting employee(only string) to object as formdata is object
  }


  //update
  updateOrders(purchase: Purchase) {
    console.log(purchase);
    this.populateOrderData(purchase);
    this.router.navigate(['/assetmaster/editorder', purchase.pdId])
  }

  //disable order
  disableOrder(_id: number) {
    if (confirm('Are you sure you want to DELETE this record?')) {
      this.purchaseService.disableOrder(_id)
        .subscribe(
          (response) => {
            console.log(response)
            this.purchaseService.getAllOrders();
          },
          (error) => {
            console.log(error)
          }
        )
    }
  }
}
