import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAuthRoutingModule } from './not-auth-routing.module';
import { NotAuthComponent } from './not-auth.component';


@NgModule({
  declarations: [
    NotAuthComponent
  ],
  imports: [
    CommonModule,
    NotAuthRoutingModule
  ]
})
export class NotAuthModule { }
