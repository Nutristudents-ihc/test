import { RecoverService } from './services/recover.service';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { recoverResponse } from './interface/recover.interface';

@Component({
  selector: 'app-pass-recover',
  templateUrl: './pass-recover.component.html',
  styleUrl: './pass-recover.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, RouterModule, MatDialogModule,  MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,CommonModule],
})
export class PassRecoverComponent {

  recoverForm!:FormGroup;
  errorMessage = '';

  constructor(public dialog: MatDialog, private fb:FormBuilder,private recoverSer:RecoverService) {

    this.recoverForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadAccounts();
  }
  accounts:recoverResponse[] = [];
  loadAccounts(){
    this.recoverSer.getAccounts().subscribe(data=>{
      console.log(data);
      this.accounts=data;
    });
  }
  updateErrorMessage() {
    const email = this.recoverForm.get('email')!;
    if (email.hasError('required')) {
      this.errorMessage = 'Debes llenar este campo';
    } else if (email.hasError('email')) {
      this.errorMessage = 'Ingresa un email válido';
    } else {
      this.errorMessage = '';
    }
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  success=true;
  onSubmit(){
    if (this.recoverForm.valid) {
      console.log('Form Submitted', this.recoverForm.value);


      const formValue = this.recoverForm.value;
      const newAccount:recoverResponse={
        email:formValue.email,
      }

      for (let i = 0; i < this.accounts.length; i++) {
        if (newAccount.email==this.accounts[i].email) {
          console.log("Account encontrada");
          this.success=true;
          this.openDialog();
        } else {
          console.log("Account no encontrada");
          this.success=false;
        }

      }
    }
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-component.html',
  styleUrl: './pass-recover.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog { }

