import { Assetclass } from './assetclass';
import { Assettype } from './assettype';
export class Asset {
    adId: number = 0;
    adName: string = '';
    assetId: number = 0;
    assettype:Assettype=new Assettype();
    assetClassId: number = 0;
    assetclass:Assetclass=new Assetclass();
    active: boolean = false;

}
