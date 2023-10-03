import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{environment} from 'src/environments/environment'
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendors:Vendor[];
  constructor(private httpClient:HttpClient) { }
  getAllVendors():void{
    //getting the data
    this.httpClient.get(environment.apiUrl+'/api/employees')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.vendors=response as Vendor[];
    },
    error=>{
      console.log('Error')
    })
  }

}

