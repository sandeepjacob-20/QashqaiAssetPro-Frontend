import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorComponent } from './vendor.component';
import { FormsModule } from '@angular/forms';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [VendorAddComponent, VendorListComponent, VendorComponent, VendorEditComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class VendorModule { }
