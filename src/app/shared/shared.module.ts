import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [SharedComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
