import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth_service/auth.service';
import { PostService } from '../services/post.service';
import { Post } from '../interface/post.interface';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})
export class PublicacionesComponent implements OnInit {
  username: string | null = null;
  posts: Post[] = [];

  constructor(private authService: AuthService, private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
    this.authService.username$.subscribe(username => {
      this.username = username;
    });
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
