import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  //default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //lazy loading
  
  { path: 'home', component: HomeComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },


   //wildcard route for page not found - should be last route
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
