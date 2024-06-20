import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { recoverResponse } from '../interface/recover.interface';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

  private apiUrl: string = environment.baseUrl;
  private  http = inject(HttpClient);

  constructor() { }
  getAccounts(): Observable<recoverResponse[]> {
    const url = `${this.apiUrl}/accounts`;
    return this.http.get<recoverResponse[]>(url);
  }
}
