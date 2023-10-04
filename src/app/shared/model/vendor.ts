
import { Asset } from "./asset";
import { AssetDefinition } from "./assetdefinition";


export class Vendor {

    // "vendorId": 1,
    // "vendorName": "Samsung",
    // "vendorType": "Supplier",
    // "assetId": null,
    // "assets": null,
    // "dteValidFrom": "2019-09-10",
    // "dteValidTo": "2023-09-10",
    // "address": "Cochin",
    // "active": true

    vendorId:number=0;
    vendorName:string='';
    vendorType:string='';
    assetId:number=0;
    assettype:Asset=new Asset();
    dteValidFrom:Date=new Date;
    dteValidTo:Date=new Date;
    address:string='';
    active: boolean=false;
    //object oriented model

    

   // asset:AssetDefinition=new AssetDefinition() 

    
}
