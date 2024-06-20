import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginResponse } from '../../interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.baseUrl;
  private  http = inject(HttpClient);

  constructor() { }
  getAccounts(): Observable<loginResponse[]> {
    const url = `${this.apiUrl}/accounts`;
    return this.http.get<loginResponse[]>(url);
  }
}
