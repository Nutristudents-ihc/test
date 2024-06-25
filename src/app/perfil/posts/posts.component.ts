import { Component } from '@angular/core';
import { PostService } from '../../comunidad/services/post.service';
import { Post } from '../../comunidad/interface/post.interface';
import { AuthService } from '../../auth_service/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private postsService:PostService, private auth:AuthService){  }
  posts:Post[] = [];
  username:string = "";
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadPosts();
    this.auth.username$.subscribe(
      username => {
        this.username = username;
      }
    );
  }
  profilePost:Post[] =[];
  loadPosts(): void {
    this.postsService.getPosts().subscribe(data=>{
      console.log(data);
      this.posts=data;
    });
  }

  deletePost(idborrar:number): void {
    this.postsService.deletePost(idborrar).subscribe(() => {
      this.loadPosts();window.location.reload();
    });}
}
