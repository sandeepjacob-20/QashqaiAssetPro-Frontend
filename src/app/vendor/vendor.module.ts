import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorComponent } from './vendor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VendorAddComponent, VendorListComponent, VendorComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
  ]
})
export class VendorModule { }
