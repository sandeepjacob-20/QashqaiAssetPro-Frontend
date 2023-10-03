import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './purchase-add/add.component';
import { ListComponent } from './purchase-list/list.component';
import { EditComponent } from './purchase-edit/edit.component';

const routes: Routes = [
//go to employee-add
{path: 'add', component:AddComponent},

//go to employee-list
{path: 'list', component:ListComponent},

//go to employee - edit
{path: 'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
