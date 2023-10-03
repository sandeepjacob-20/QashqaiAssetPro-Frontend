import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{environment} from 'src/environments/environment'
import { Vendor } from '../model/vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  //declaring global variables
  formVendorData:Vendor=new Vendor();
  //list of vendors
  vendors:Vendor[];
  constructor(private httpClient:HttpClient) { }
  
  //listing all vendors
  getAllVendors():void{
    //getting the data
    this.httpClient.get(environment.apiURL+'/api/vendors')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.vendors=response as Vendor[];
    },
    error=>{
      console.log('Error')
    })
  }
  //adding vendor
  insertVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.post(environment.apiURL+'/api/vendors',vendor)
  }
  //disable
  disableVendor(id:number){
    return this.httpClient.get(environment.apiURL+'/api/vendors/disable/'+id)
  }
  //update
  updateVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.put(environment.apiURL+'/api/vendors',vendor)
  }
}

