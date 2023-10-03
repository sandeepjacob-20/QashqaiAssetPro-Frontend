import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorComponent } from './vendor.component';
import { FormsModule } from '@angular/forms';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';


@NgModule({
  declarations: [VendorAddComponent, VendorListComponent, VendorComponent, VendorEditComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
  ]
})
export class VendorModule { }
