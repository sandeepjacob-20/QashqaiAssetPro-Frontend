import { Asset } from "./asset";
import { Status } from "./status";
import { Vendor } from "./vendor";

export class Purchase {
    pdId: number=0;
    pdOrder: string="";
    pdQty: number=0;
    pdDate: Date=new Date;
    pdDDate: Date=new Date;
    adId: number=0;
     
    // "assetDefinition": {
    //     "adId": 2,
    //     "adName": "lenovo",
    //     "assetId": 1,
    //     "assetTypes": {
    //         "assetId": 1,
    //         "assetType": "laptop",
    //         "active": true
    //     },
    //     "active": false
    // },
    assetId: number=0;
    asset: Asset= new Asset();
    
    vendorId: number=0;
    vendor: Vendor= new Vendor();
    
    statusId: number=0;
    status: Status = new Status();
   
    active: boolean= false;
    taken: boolean=false;
  insertOrder: any;


}
