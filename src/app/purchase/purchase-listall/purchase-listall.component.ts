import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/shared/model/purchase';
import { PurchaseService } from 'src/app/shared/services/purchase.service';
@Component({
  selector: 'app-purchase-listall',
  templateUrl: './purchase-listall.component.html',
  styleUrls: ['./purchase-listall.component.scss']
})
export class PurchaseListallComponent implements OnInit {
  
  constructor(public purchaseService:PurchaseService, private router:Router) { }

  ngOnInit(): void {
    this.purchaseService.getAllOrders();
    
  }
   //getting order data
   populateOrderData(purchase:Purchase){
    this.purchaseService.formOrderData=Object.assign({},purchase)//converting employee(only string) to object as formdata is object
  }
  
  
  //update
  updateOrders(purchase:Purchase){
    console.log(purchase);
    this.populateOrderData(purchase);
    this.router.navigate(['/purchase/edit',purchase.pdId])
  }

  
}
