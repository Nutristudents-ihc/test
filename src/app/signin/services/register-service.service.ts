import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private apiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  registerAccount(account:Account):Observable<Account> {
    console.log("enviado",account)
    const url=`${this.apiUrl}/accounts`;
    return this.http.post<Account>(url,account);
  }
  getAccounts(): Observable<Account[]> {
    const url = `${this.apiUrl}/accounts`;
    return this.http.get<Account[]>(url);
  }
}

