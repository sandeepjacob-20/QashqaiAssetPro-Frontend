import { Injectable } from '@angular/core';
import { Purchase } from '../model/purchase';
import{HttpClient} from'@angular/common/http';
import{environment} from 'src/environments/environment';
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  //declare variables-------global variables
  formOrderData: Purchase = new Purchase();
  purchase: Purchase[];
  vendor: Vendor[];
  constructor(private httpClient: HttpClient) { }
  //1 get all orders - promise
  getAllOrders():void{
    this.httpClient.get(environment.apiURL+'/api/orders/get')
    .toPromise()
    .then(response => {
      console.log(response)
      this.purchase = response as Purchase[]
    },
    error=>{
      console.log(error)
    });
 
}
//get all vendors
  getAllVendors(): void{
    this.httpClient.get(environment.apiURL+'/api/vendors')
    .toPromise()
    .then(response => {
      console.log(response)
      this.vendor = response as Vendor[]
    },
    error=>{
      console.log(error)
    });
    
  }
}