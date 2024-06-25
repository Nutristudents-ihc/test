import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DietasRoutingModule } from './dietas-routing.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { DietasComponent } from './components/dietas/dietas.component';
import { TiposComidaComponent } from './components/tipos-comida/tipos-comida.component';
import { SuccessDialogComponent } from './components/forms/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    DietasComponent,
    TiposComidaComponent,
    SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, // Import FormsModule
    DietasRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class DietasModule { }