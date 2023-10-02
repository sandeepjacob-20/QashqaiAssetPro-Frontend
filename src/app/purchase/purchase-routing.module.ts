import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

const routes: Routes = [
  //for directing to the add purchase page
  { path: 'add', component: PurchaseAddComponent },

  //for directing to the list purchase page
  { path: 'list', component: PurchaseListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
