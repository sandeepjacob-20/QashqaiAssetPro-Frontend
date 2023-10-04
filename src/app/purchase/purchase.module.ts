import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { ListComponent } from './purchase-list/list.component';
import { AddComponent } from './purchase-add/add.component';

import { FormsModule } from '@angular/forms';

import { PurchaseUserEditComponent } from './purchase-user-edit/purchase-user-edit.component';
import{Ng2SearchPipeModule } from 'ng2-search-filter';
import{NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  declarations: [PurchaseComponent, ListComponent, AddComponent, PurchaseUserEditComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class PurchaseModule { }
