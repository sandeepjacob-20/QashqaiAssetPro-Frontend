import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Asset } from '../model/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  asset:Asset[];
  constructor(private httpClient:HttpClient) { }
  getAllAsset():void{
    //getting the data
    this.httpClient.get(environment.apiURL+'/api/asset')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.asset=response as Asset[];
    },
    error=>{
      console.log('Error')
    })
  }

}