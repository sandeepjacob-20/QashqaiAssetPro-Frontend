import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AssetDefinition } from '../model/assetdefinition';
import { Asset } from '../model/asset';
import { Assetclass } from '../model/assetclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  assetdefinition:AssetDefinition[];
  asset:Asset[];
  assetclass:Assetclass[];
  constructor(private httpClient:HttpClient) { }
  getAllAsset():void{
    //getting the data
    this.httpClient.get(environment.apiURL+'/api/assetdefinition')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.assetdefinition=response as AssetDefinition[];
    },
    error=>{
      console.log('Error')
    })
  }

  getAllAssetType(): void{
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

  getAllAssetClass(): void{
    this.httpClient.get(environment.apiURL+'/api/assetClass')
    .toPromise()
    .then(response => {
      console.log(response)
      this.assetclass = response as Assetclass[]
    },
    error=>{
      console.log(error)
    });
    
  }
  //adding assetdefintion
   insertAsset(asset:Asset):Observable<any>{
    return this.httpClient.post(environment.apiURL+'/api/assetdefinition',asset)
   }
  //disable
  disableAsset(id:number){
    return this.httpClient.get(environment.apiURL+'/api/assetdefinition/deactivate/'+id)
  }
  // //update
   updateAsset(asset:Asset):Observable<any>{
   return this.httpClient.put(environment.apiURL+'/api/assetdefinition',asset)
   }

}