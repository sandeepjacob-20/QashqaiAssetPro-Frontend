import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddComponent } from './purchase-add/add.component';
import { ListComponent } from './purchase-list/list.component';
import { EditComponent } from './purchase-edit/edit.component';
import { PurchaseListallComponent } from './purchase-listall/purchase-listall.component';
import { PurchaseUserEditComponent } from './purchase-user-edit/purchase-user-edit.component';

const routes: Routes = [
//go to employee-add
  { path: 'add', component: AddComponent, canActivate: [AuthGuard], data: { role: '2' } },

//go to employee-list
  { path: 'list', component: ListComponent, canActivate: [AuthGuard], data: { role: '2' } },

//go to employee - edit
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard], data: { role: '1' } },
//go to user-edit
{ path: 'useredit/:id', component: PurchaseUserEditComponent, canActivate: [AuthGuard], data: { role: '2' } },

  //go to employee - listall
  { path: 'listall', component: PurchaseListallComponent, canActivate: [AuthGuard], data: { role: '1' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
