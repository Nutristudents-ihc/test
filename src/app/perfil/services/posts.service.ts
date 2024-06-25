import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../signin/interface/account.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../../comunidad/interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {
  }
  private apiUrl:string=environment.baseUrl;
  getAccounts():Observable<Account[]>{
    const url = `${this.apiUrl}/accounts`;
    return this.http.get<Account[]>(url);
  }
  getPosts():Observable<Post[]>{
    const url = `${this.apiUrl}/posts`;
    return this.http.get<Post[]>(url);
  }
}
