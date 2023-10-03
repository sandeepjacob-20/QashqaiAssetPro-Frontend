import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Asset } from '../model/asset';
import { Observable } from 'rxjs';
import { Assettype } from '../model/assettype';
import { Assetclass } from '../model/assetclass';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  formAssetData:Asset=new Asset();
  assets:Asset[];
  assettype: Assettype[];
  assetclass: Assetclass[];
  constructor(private httpClient:HttpClient) { }
  getAllAsset():void{
    //getting the data
    this.httpClient.get(environment.apiURL+'/api/assetdefinition')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.assets=response as Asset[];
    },
    error=>{
      console.log('Error')
    })
  }

  getAllAssetType(): void{
    this.httpClient.get(environment.apiURL+'/api/assetO')
    .toPromise()
    .then(response => {
      console.log(response)
      this.assettype = response as Assettype[]
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