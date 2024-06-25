import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    PerfilComponent,
    PostsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatCard,
    MatIcon,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardTitle
  ]
})
export class PerfilModule { }
