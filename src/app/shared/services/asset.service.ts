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

  formAssetData: AssetDefinition = new AssetDefinition();
  assetdefinition: AssetDefinition[];
  // assettypes: Asset[];
  asset: Asset[];
  assetclass: Assetclass[];
  constructor(private httpClient: HttpClient) { }
  getAllAsset(): void {
    //getting the data
    this.httpClient.get(environment.apiURL + '/api/assetdefinition')
      .toPromise()
      .then(response => {
        console.log(response);
        this.assetdefinition = response as AssetDefinition[];
      },
        error => {
          console.log('Error')
        })
  }

  getAllAssetType(): void {
    this.httpClient.get(environment.apiURL + '/api/asset')
      .toPromise()
      .then(response => {
        console.log(response)
        this.asset = response as Asset[]
      },
        error => {
          console.log(error)
        });

  }

  getAllAssetClass(): void {
    this.httpClient.get(environment.apiURL + '/api/assetclass')
      .toPromise()
      .then(response => {
        console.log(response)
        this.assetclass = response as Assetclass[]
      },
        error => {
          console.log(error)
        });

  }
  //adding assetdefintion
  insertAsset(assetdefinition: AssetDefinition): Observable<any> {
    console.log(assetdefinition);
    return this.httpClient.post(environment.apiURL + '/api/assetdefinition', assetdefinition);
  }
  //disable
  disableAsset(id: number) {
    return this.httpClient.get(environment.apiURL + '/api/assetdefinition/deactivate/' + id)
  }
  // //update
  updateAsset(assetdefinition: AssetDefinition): Observable<any> {
    return this.httpClient.put(environment.apiURL + '/api/assetdefinition', assetdefinition)
  }

}