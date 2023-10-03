import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AssetDefinition } from '../model/assetdefinition';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  assetdefinition:AssetDefinition[];
  constructor(private httpClient:HttpClient) { }
  getAllAsset():void{
    //getting the data
    this.httpClient.get(environment.apiURL+'/api/asset')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.assetdefinition=response as AssetDefinition[];
    },
    error=>{
      console.log('Error')
    })
  }

}