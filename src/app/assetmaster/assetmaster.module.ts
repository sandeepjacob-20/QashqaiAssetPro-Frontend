import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetmasterRoutingModule } from './assetmaster-routing.module';
import { AssetmasterComponent } from './assetmaster.component';
import { AssetmasterAddComponent } from './assetmaster-add/assetmaster-add.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { PendingListComponent } from './pending-list/pending-list.component';
import { NewordersComponent } from './neworders/neworders.component';
import { EditordersComponent } from './editorders/editorders.component';
import { FormsModule } from '@angular/forms';
import { AssetmasterEditComponent } from './assetmaster-edit/assetmaster-edit.component';


@NgModule({
  declarations: [AssetmasterComponent, AssetmasterAddComponent, AssetmasterListComponent, PendingListComponent, NewordersComponent, EditordersComponent, AssetmasterEditComponent],
  imports: [
    CommonModule,
    AssetmasterRoutingModule,
    FormsModule
  ]
})
export class AssetmasterModule { }
