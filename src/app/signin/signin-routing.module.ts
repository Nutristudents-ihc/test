import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin.component';
import { ListAccountComponent } from './components/list-account/list-account.component';

const routes: Routes = [{ path: '', component: SigninComponent },
  {  path:'list',component:ListAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
