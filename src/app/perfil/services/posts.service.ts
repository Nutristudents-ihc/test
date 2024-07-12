import { HttpClient, HttpParams } from '@angular/common/http';
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

  //post:user
  getPostUser(user: string): Observable<Post[]> {
    const params = new HttpParams().set('user', user);
    const url = `${this.apiUrl}/posts/filterByUser`;
    return this.http.get<Post[]>(url, { params });
  }
  deletePostId(id:number):Observable<Post>{
    return this.http.delete<Post>(`${this.apiUrl}/posts/${id}`);
  }
  putPostId(id:number, post: Post): Observable<Post>{
    const url = `${this.apiUrl}/posts/${id}`;
    return this.http.put<Post>(url, post);
  }

}
