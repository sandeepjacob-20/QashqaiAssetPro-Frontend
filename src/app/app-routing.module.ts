import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SharedComponent } from './shared/shared.component';


const routes: Routes = [
  //default route
  { path: '', redirectTo: 'purchase/add', pathMatch: 'full' },

  //lazy loading
  {
    path: 'purchase',
    component: PurchaseComponent,
    loadChildren: () => import('./purchase/purchase.module').then(x =>x.PurchaseModule)
  },
  {
    path: 'shared',
    component: SharedComponent,
    loadChildren: () => import('./shared/shared.module').then(x => x.SharedModule)
  },
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: HomeComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

   //wildcard route for page not found - should be last route
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
