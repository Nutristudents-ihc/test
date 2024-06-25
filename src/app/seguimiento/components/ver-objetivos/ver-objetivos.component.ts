import { Component, OnInit } from '@angular/core';
import { ObjetivosService } from '../../services/objetivos.service';
import { Objetivo } from '../../interfaces/objetivos.model';

@Component({
  selector: 'app-ver-objetivos',
  templateUrl: './ver-objetivos.component.html',
  styleUrls: ['./ver-objetivos.component.css']
})
export class VerObjetivosComponent implements OnInit {
  objetivos: Objetivo[] = [];

  constructor(private objetivosService: ObjetivosService) {}

  ngOnInit(): void {
    this.objetivosService.getObjetivos().subscribe(data => {
      this.objetivos = data;
    });
  }
}