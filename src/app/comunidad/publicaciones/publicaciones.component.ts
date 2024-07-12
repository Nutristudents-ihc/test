import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth_service/auth.service';
import { PostService } from '../services/post.service';
import { Post } from '../interface/post.interface';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../services/sharedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
  standalone:false
})
export class PublicacionesComponent implements OnInit {
  username: string = "";
  posts: Post[] = [];

  constructor(private authService: AuthService, private postService: PostService,private shared:SharedDataService,public dialog:MatDialog) {}

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

  confirmDelete(idborrar:number):void{
    this.shared.sharedVariable=idborrar;
    this.dialog.open(confirmacion);
  }
}



@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-component2.html',
  styleUrl:'publicaciones.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions,MatDialogClose, MatButtonModule,HttpClientModule,CommonModule]
})
export class confirmacion{
  importedVariable:number=-1;
  constructor(private shared:SharedDataService,private postService:PostService,private router:Router){
    this.importedVariable=this.shared.sharedVariable;
  }
  deletePost(): void {
    this.postService.deletePost(this.importedVariable).subscribe(() => {
      this.loadPosts();window.location.reload();
    });

  }

  posts: Post[] = [];
  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
