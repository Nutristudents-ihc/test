import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadRoutingModule } from './comunidad-routing.module';
import { ComunidadComponent } from './comunidad.component';
import { BtnCrearComponent } from './btn-crear/btn-crear.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogActions } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ComunidadComponent,
    PublicacionesComponent

  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule,
    BtnCrearComponent,
    HttpClientModule,
    MatCardModule, MatButtonModule,
    MatIcon,
    MatDialogActions
  ]
})
export class ComunidadModule { }
