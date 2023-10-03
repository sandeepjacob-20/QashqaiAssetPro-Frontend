import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetComponent } from './asset.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AssetAddComponent, AssetListComponent, AssetComponent],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule
  ]
})
export class AssetModule { }
