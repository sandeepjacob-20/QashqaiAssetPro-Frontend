import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddComponent } from './purchase-add/add.component';
import { ListComponent } from './purchase-list/list.component';
import { PurchaseUserEditComponent } from './purchase-user-edit/purchase-user-edit.component';

const routes: Routes = [
//go to employee-add
  { path: 'add', component: AddComponent, canActivate: [AuthGuard], data: { role: '2' } },

//go to employee-list
  { path: 'list', component: ListComponent, canActivate: [AuthGuard], data: { role: '2' } },

//go to user-edit
{ path: 'useredit/:id', component: PurchaseUserEditComponent, canActivate: [AuthGuard], data: { role: '2' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
