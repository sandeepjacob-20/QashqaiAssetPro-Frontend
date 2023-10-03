import { Assetclass } from './assetclass';
import { Asset } from './asset';
export class AssetDefinition {
    adId: number = 0;
    adName: string = '';
    assetId: number = 0;
    assettype: Asset = new Asset();
    assetClassId: number = 0;
    assetclass: Assetclass = new Assetclass();
    active: boolean = false;

}
