import { Injectable } from '@angular/core';
import { Assetmaster } from '../model/assetmaster';
import { Asset } from '../model/asset';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vendor } from '../model/vendor';
import { AssetDefinition } from '../model/assetdefinition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetmasterService {
  // Delcaring variables
  formAssetMasterData: Assetmaster = new Assetmaster();
  asset: Asset[];
  vendors: Vendor[];
  assetdefinition: AssetDefinition[];

  constructor(private httpClient: HttpClient) { }

  //functions for various purposes

  // 1. Get all asset types for dropdown
  getAllAssetTypes(): void {
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

  // 2. Get all vendors for dropdown
  getAllVendors(): void {
    this.httpClient.get(environment.apiURL + '/api/vendors')
      .toPromise()
      .then(response => {
        console.log(response)
        this.vendors = response as Vendor[]
      },
        error => {
          console.log(error)
        });
  }

    // 3. Get all asset definitions for dropdown
    getAllAssetDefinitions(): void {
    this.httpClient.get(environment.apiURL + '/api/assetdefinition')
      .toPromise()
      .then(response => {
        console.log(response)
        this.assetdefinition = response as AssetDefinition[]
      },
        error => {
          console.log(error)
        });
  }

  // 4. adding asset master
  insertAssetMaster(assetMaster: Assetmaster): Observable<any> {
    return this.httpClient.post(environment.apiURL + '/api/addassets', assetMaster);
  }

  

}
