import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../forms/success-dialog/success-dialog.component';
import { ObjetivosService } from '../../services/objetivos.service';
import { Objetivo } from '../../interfaces/objetivos.model';

@Component({
  selector: 'app-buscar-objetivos',
  templateUrl: './buscar-objetivos.component.html',
  styleUrls: ['./buscar-objetivos.component.css']
})
export class BuscarObjetivosComponent {
  objetivos: Objetivo[] = [
    { id: 1, nombre: 'Bajar Grasa', descripcion: 'Reto de bajar grasa corporal' },
    { id: 2, nombre: 'Reto Abdominales', descripcion: 'Reto de abdominales' },
    { id: 3, nombre: 'Reto Frutas', descripcion: 'Reto de cinco días de frutas' }
  ];

  constructor(private dialog: MatDialog, private objetivosService: ObjetivosService) {}

  onAddObjetivo(objetivo: Objetivo) {
    this.objetivosService.addObjetivo(objetivo).subscribe(() => {
      this.dialog.open(SuccessDialogComponent);
    });
  }
}