import { Asset } from "./asset";
import { AssetDefinition } from "./assetdefinition";
import { Status } from "./status";
import { Vendor } from "./vendor";



export class Purchase {
    pdId: number=0;
    pdOrder: string="";
    pdQty: number=0;
    pdDate: Date=new Date;
    pdDDate: Date=new Date;
    adId: number=0;
    assetdfinition: AssetDefinition= new AssetDefinition();
  
    
    assetId: number=0;
    assettype: Asset = new Asset();
    
    vendorId: number=0;
    vendor: Vendor= new Vendor();
    
    statusId: number=0;
    status: Status = new Status();
   
    active: boolean= false;
    taken: boolean=false;
  insertOrder: any;


}
