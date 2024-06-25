import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { BuscarObjetivosComponent } from './components/buscar-objetivos/buscar-objetivos.component';
import { VerObjetivosComponent } from './components/ver-objetivos/ver-objetivos.component';
import { SuccessDialogComponent } from './forms/success-dialog/success-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BuscarObjetivosComponent,
    VerObjetivosComponent,
    SuccessDialogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SeguimientoRoutingModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SeguimientoModule { }