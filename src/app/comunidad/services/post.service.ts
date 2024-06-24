import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  registerPost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}/posts`;
    return this.http.post<Post>(url, post);
  }

  getPosts(): Observable<Post[]> {
    const url = `${this.apiUrl}/posts`;
    return this.http.get<Post[]>(url);
  }
  deletePost(id:number): Observable<Post>{
    return this.http.delete<Post>(`${this.apiUrl}/posts/${id}`);
  }
}
