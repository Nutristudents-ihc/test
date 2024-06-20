import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { FormsComponent } from './forms/forms.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ListAccountComponent } from './components/list-account/list-account.component';


@NgModule({
  declarations: [
    SigninComponent,
    ListAccountComponent,

  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsComponent,
    MaterialModule,
    RouterModule
  ]
})
export class SigninModule { }
