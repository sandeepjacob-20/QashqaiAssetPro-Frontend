import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetmasterRoutingModule } from './assetmaster-routing.module';
import { AssetmasterComponent } from './assetmaster.component';
import { AssetmasterAddComponent } from './assetmaster-add/assetmaster-add.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { PendingListComponent } from './pending-list/pending-list.component';


@NgModule({
  declarations: [AssetmasterComponent, AssetmasterAddComponent, AssetmasterListComponent, PendingListComponent],
  imports: [
    CommonModule,
    AssetmasterRoutingModule
  ]
})
export class AssetmasterModule { }
