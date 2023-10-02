import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';


@NgModule({
  declarations: [PurchaseComponent, PurchaseAddComponent, PurchaseListComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
