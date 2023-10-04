import { Asset } from "./asset";
import { AssetDefinition } from "./assetdefinition";
import { Vendor } from "./vendor";

export class Assetmaster {

    amId: number = 0;

    assetId: number = 0;
    assettype: Asset = new Asset();

    vendorId: number = 0;
    vendor: Vendor = new Vendor();

    adId: number = 0;
    assetdefinition: AssetDefinition = new AssetDefinition();

    model: string = '';
    serialNumber: number = 0;
    yearOfManifacture: Date = new Date;
    purchaseDate: Date = new Date;
    warranty: CharacterData = new CharacterData;
    warrantyFrom: Date = new Date;
    warrantyTo: Date = new Date;
    taken: boolean = false;
}
