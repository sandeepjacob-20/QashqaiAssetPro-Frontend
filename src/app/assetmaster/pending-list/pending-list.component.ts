import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/shared/model/purchase';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss']
})
export class PendingListComponent implements OnInit {

  constructor(public purchaseService: PurchaseService, private router: Router) { }

  ngOnInit(): void {
    this.purchaseService.getSomeOrders();
  }

  //getting order data
  populateOrderData(purchase: Purchase) {
    this.purchaseService.formOrderData = Object.assign({}, purchase)//converting employee(only string) to object as formdata is object
  }

  addAssetMaster(purchase: Purchase) {
    console.log(purchase);
    this.populateOrderData(purchase);
    this.router.navigate(['/assetmaster/add'])
  }
}
