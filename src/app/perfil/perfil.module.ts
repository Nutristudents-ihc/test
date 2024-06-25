import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PerfilComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
