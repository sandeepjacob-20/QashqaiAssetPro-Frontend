import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetComponent } from './asset.component';
import { FormsModule } from '@angular/forms';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AssetAddComponent, AssetListComponent, AssetComponent, AssetEditComponent, HomeComponent],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ]
})
export class AssetModule { }
