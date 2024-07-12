import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PerfilComponent,
    PostsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatCardModule, MatButtonModule,
    MatIcon,
    MatDialogActions
  ]
})
export class PerfilModule { }
