import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objetivo } from '../interfaces/objetivos.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {
  private apiUrl = `${environment.apiUrl}/objetivos`;

  constructor(private http: HttpClient) {}

  getObjetivos(): Observable<Objetivo[]> {
    return this.http.get<Objetivo[]>(this.apiUrl);
  }

  addObjetivo(objetivo: Objetivo): Observable<Objetivo> {
    return this.http.post<Objetivo>(this.apiUrl, objetivo);
  }
}