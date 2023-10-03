import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';

const routes: Routes = [
  //vendor-add
  { path: 'add', component: VendorAddComponent },
  //vendor-list
  { path: 'list', component: VendorListComponent },
  //vendor-edit
  { path: 'edit/:id', component: VendorEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
