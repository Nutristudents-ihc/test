import { HttpClientModule } from '@angular/common/http';
import { PostService } from './../services/post.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Post } from '../interface/post.interface';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../auth_service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PublicacionesComponent } from '../publicaciones/publicaciones.component';

@Component({
  selector: 'app-btn-crear',
  templateUrl: './btn-crear.component.html',
  styleUrl: './btn-crear.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,CommonModule],
})
export class BtnCrearComponent {
  constructor(public dialog:MatDialog){}
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}




@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-component.html',
  styleUrl:'btn-crear.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions,FormsModule,MatInputModule, MatDialogClose, MatButtonModule,MatFormField,ReactiveFormsModule,HttpClientModule,CommonModule,NgIf]
})
export class DialogElementsExampleDialog {
  publishForm!:FormGroup
  isAuthenticated = false;
  username: string | null = null;

  title=new FormControl('', Validators.required);
  content=new FormControl('', Validators.required);
  constructor(private fb:FormBuilder,private authService: AuthService,private postService:PostService,private router:Router,private _snackBar: MatSnackBar){
    this.publishForm = this.fb.group({
      title:['', Validators.required],
      content:['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      }
    );

    this.authService.username$.subscribe(
      username => {
        this.username = username;
      }
    );
  }
  errorMessage = '';
  titleErrorMessage(){
    const title=this.publishForm.get('title')!
    if (title.hasError('required')) {
      this.errorMessage = 'Debes llenar este campo';}
    else {
      this.errorMessage = '';
    }
  }
  errorMessage2 = '';
  contentErrorMessage(){
    const content=this.publishForm.get('content')!
    if (content.hasError('required')) {
      this.errorMessage2 = 'Debes llenar este campo';}
    else {
      this.errorMessage2 = '';
    }
  }
  durationInSeconds = 5;

  onSubmit(){
    if (this.publishForm.valid){
      console.log('Form Submitted', this.publishForm.value);
      const formValue = this.publishForm.value;
      const username: string = this.username ?? "";
      const newPost:Post={
        id:0,
        title:formValue.title,
        content:formValue.content,
        user:username,
        likes:0
      }
      this._snackBar.open("Post publicado con éxito", "Cerrar",{duration:3000});
      this.postService.registerPost(newPost).subscribe({
        next:(newPos:Post) => {window.location.reload()},
        error:error=>{console.error("eror",error);},complete:()=>{}});
      this.publishForm.reset();

    }
  }


}

