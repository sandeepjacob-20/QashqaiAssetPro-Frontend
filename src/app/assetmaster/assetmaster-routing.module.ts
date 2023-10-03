import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { AssetmasterAddComponent } from './assetmaster-add/assetmaster-add.component';
import { AuthGuard } from '../auth/auth.guard';
import { PendingListComponent } from './pending-list/pending-list.component';
import { NewordersComponent } from './neworders/neworders.component';

const routes: Routes = [
  { path:'add', component: AssetmasterAddComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path:'list', component: AssetmasterListComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'pending', component: PendingListComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'neworders', component: NewordersComponent, canActivate: [AuthGuard], data: { role: '1' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetmasterRoutingModule { }
