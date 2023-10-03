import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [

  //for directing to the user home page
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { role: '2' } },

  //for directing to the admin home page
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: '1' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
