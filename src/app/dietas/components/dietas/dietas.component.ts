import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DietasService } from '../../services/dietas.service';
import { DietasData } from '../../interfaces/dietas.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../forms/success-dialog/success-dialog.component';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css']
})
export class DietasComponent implements OnInit {
  personalInfoForm!: FormGroup;
  comidaForm!: FormGroup;
  tiposComida = [
    { name: 'Carnes blancas', selected: false },
    { name: 'Carnes rojas', selected: false },
    { name: 'Tubérculos', selected: false },
    { name: 'Frutos secos', selected: false },
    { name: 'Embutidos', selected: false },
    { name: 'Pescado', selected: false }
  ];

  constructor(
    private _formBuilder: FormBuilder, 
    private dietasService: DietasService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.personalInfoForm = this._formBuilder.group({
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      grasaCorporal: ['']
    });

    this.comidaForm = this._formBuilder.group({
      comidas: [this.tiposComida]
    });
  }

  onToggleSelect(tipo: any): void {
    tipo.selected = !tipo.selected;
  }

  onSubmit(): void {
    const selectedComidas = this.tiposComida.filter(t => t.selected).map(t => t.name);
    const dietasData: DietasData = {
      ...this.personalInfoForm.value,
      tiposComida: selectedComidas
    };

    this.dietasService.sendDietasData(dietasData).subscribe(
      response => {
        console.log('Datos enviados exitosamente', response);
        this.dialog.open(SuccessDialogComponent);
      },
      error => {
        console.error('Error al enviar los datos', error);
      }
    );
  }
}