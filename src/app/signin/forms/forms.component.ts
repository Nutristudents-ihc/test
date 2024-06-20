import { RegisterServiceService } from './../services/register-service.service';

import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { Account } from '../interface/account.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,MatButtonModule,CommonModule,NgIf],
})
export class FormsComponent {
  email = new FormControl('', [Validators.required]);
  user=new FormControl('', [Validators.required]);
  pass=new FormControl('', [Validators.required]);
  confirmPass=new FormControl('', [Validators.required]);

  private registerService=inject(RegisterServiceService);
  private router=inject(Router);

  registerForm!: FormGroup;

  constructor(private fb:FormBuilder,public dialog: MatDialog) {

      this.registerForm = this.fb.group({
        user:['', [Validators.required]],
        email:['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(12)]],
        confirmPass: ['', Validators.required]
      }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadAccounts();
  }
  accounts:Account[] = [];
  loadAccounts(){
    this.registerService.getAccounts().subscribe(accounts =>{console.log(accounts);this.accounts = accounts})
  }
  get password() {
    return this.registerForm.get('pass');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  success=true;
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);

      const formValue = this.registerForm.value;
      const newAccount:Account={
        id:0,
        user:formValue.user,
        email:formValue.email,
        pass:formValue.pass,
      }

      for (let int = 0; int < this.accounts.length; int++) {
        if (newAccount.email === this.accounts[int].email || newAccount.user===this.accounts[int].user) {
          this.success=false;
          break;
        } else {
          this.success=true;
        }
      }
      if (this.success) {
        this.openDialog();
        this.registerService.registerAccount(newAccount).subscribe( {
          next:(newAccount:Account)=>{this.router.navigate(['/login'])},
          error:error=>{console.error("eror",error);},complete:()=>{}});
      }
    }

}

  passwordMatchValidator(form: FormGroup) {

    return form.get('pass')?.value === form.get('confirmPass')?.value
      ? null : { 'mismatch': true };
  }

  errorMessage = '';
  userErrorMessage(){
    const user=this.registerForm.get('user')!;
    if (user.hasError('required')) {
      this.errorMessage = 'Debes llenar este campo';}
    else {
      this.errorMessage = '';
    }
  }
  errorMessage2='';
  updateErrorMessage() {
    const email=this.registerForm.get('email')!;

    if (email.hasError('required')) {
      this.errorMessage2 = 'Debes llenar este campo';
    } else if (email.hasError('email')) {
      this.errorMessage2 = 'Ingresa un email válido';
    } else {
      this.errorMessage2 = '';
    }
  }

  errorMessage3='';
  passErrorMessage(){
    const pass=this.registerForm.get('pass')!;
    if (pass.hasError('required')) {
      this.errorMessage3 = 'Debes llenar este campo';}
      else if (pass.hasError('minlength')) {
        this.errorMessage3 = 'La contraseña debe tener al menos 12 caracteres';
      }
    else {
      this.errorMessage3 = '';
    }
  }

  errorMessage4='';
  passErrorMessage2(){
    const confirmPass=this.registerForm.get('confirmPass')!;
    if (confirmPass.hasError('required')) {
      this.errorMessage4 = 'Debes llenar este campo';}
    else {
      this.errorMessage4 = '';
    }
  }
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  hide2 = true;
  clickEvent2(event: MouseEvent) {
  this.hide2 = !this.hide2;
  event.stopPropagation();}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-component.html',
  styleUrl: 'forms.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog { }
