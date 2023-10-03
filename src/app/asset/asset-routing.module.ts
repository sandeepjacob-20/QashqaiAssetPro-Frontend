import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'add', component: AssetAddComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'list', component: AssetListComponent, canActivate: [AuthGuard], data: { role: '1' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
