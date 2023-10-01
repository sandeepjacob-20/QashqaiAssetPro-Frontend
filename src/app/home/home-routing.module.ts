import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  //for directing to the user home page
  { path: 'user', component: UserComponent },

  //for directing to the admin home page
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
