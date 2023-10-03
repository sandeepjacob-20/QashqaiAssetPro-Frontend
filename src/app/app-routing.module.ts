import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { VendorComponent} from './vendor/vendor.component'
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  //default route
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  //lazy loading
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: HomeComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'purchase', component: PurchaseComponent, loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule) },
  {path:'vendors',component: VendorComponent,loadChildren: () => import('./vendor/vendor.module').then(x => x.VendorModule)},
   //wildcard route for page not found - should be last route
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
