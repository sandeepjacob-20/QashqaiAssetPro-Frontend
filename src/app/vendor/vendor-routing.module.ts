import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'add', component: VendorAddComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'list', component: VendorListComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'edit/:id', component: VendorEditComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { role: '4' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
