import { Injectable } from '@angular/core';
import { Purchase } from '../model/purchase';
import{HttpClient} from'@angular/common/http';
import{environment} from 'src/environments/environment';
import { Vendor } from '../model/vendor';
import { AssetDefinition } from '../model/assetdefinition';
import { Asset } from '../model/asset';
import { Observable } from 'rxjs';
import { PurchaseStatus } from '../model/purchaseStatus';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  updateOrder(value: any) {
    throw new Error('Method not implemented.');
  }
  //declare variables-------global variables
  formOrderData: Purchase = new Purchase();
  purchase: Purchase[];
  vendor: Vendor[];
  asset: Asset[];
  purchaseStatus:PurchaseStatus[];
  assetDefinition: AssetDefinition[];
  // assetDefinition : AssetDefinition[];
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
//get some orders whose status is 4
  getSomeOrders(): void {
    this.httpClient.get(environment.apiURL + '/api/orders/listbystatus')
      .toPromise()
      .then(response => {
        console.log(response)
        this.purchase = response as Purchase[]
      },
        error => {
          console.log(error)
        });

  }
//INSERT Vendor
insertOrder(purchase: Purchase): Observable<any> {
  console.log(purchase);
  return this.httpClient.post(environment.apiURL + '/api/orders/insert', purchase);
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
  getAllAssetsTypes(): void{
    this.httpClient.get(environment.apiURL+'/api/asset')
    .toPromise()
    .then(response => {
      console.log(response)
      this.asset = response as Asset[]
    },
    error=>{
      console.log(error)
    });
    
  }
  getAllAssets(): void{
    this.httpClient.get(environment.apiURL+'/api/assetdefinition')
    .toPromise()
    .then(response => {
      console.log(response)
      this.assetDefinition = response as AssetDefinition[]
    },
    error=>{
      console.log(error)
    });
    
  }
  
  //update
  updateOrders(purchase:Purchase):Observable<any>{
    return this.httpClient.put(environment.apiURL+'/api/orders/edit',purchase)
  }

  //getallStatus
  getAllStatus():void{
    this.httpClient.get(environment.apiURL+'/api/status/get')
    .toPromise()
    .then(response => {
      console.log(response)
      this.purchaseStatus = response as PurchaseStatus[]
    },
    error=>{
      console.log(error)
    });
  }
  //disable

  disableOrder(id:number){
    return this.httpClient.get(environment.apiURL+'/api/orders/delete/'+id)
  }
}
