import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { DietasData } from '../interfaces/dietas.model';

@Injectable({
  providedIn: 'root'
})
export class DietasService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendDietasData(data: DietasData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/dietas`, data);
  }
}