
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { loginResponse } from '../interface/login.interface';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth_service/auth.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule,RouterModule,ReactiveFormsModule,CommonModule],
})
export class FormsComponent {
  user=new FormControl('', [Validators.required]);
  pass=new FormControl('', [Validators.required]);

  private router=inject(Router);
 loginForm!: FormGroup;
  errorMessage = '';

  constructor(private fb:FormBuilder,private loginSer:LoginService,private authService: AuthService) {
      merge(this.user.statusChanges, this.user.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.userErrorMessage())


      this.loginForm = this.fb.group({
        user:['', [Validators.required]],
        pass: ['', [Validators.required]]
      })

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadAcc();

  }
  accounts:loginResponse[] = [];
  loadAcc(){
    this.loginSer.getAccounts().subscribe(data=>{
      console.log(data);
      this.accounts=data;
    });
  }


  userErrorMessage(){
    if (this.user.hasError('required')) {
      this.errorMessage = 'Debes llenar este campo';}
    else {
      this.errorMessage = '';
    }
  }

  errorMessage2 = '';
  passErrorMessage(){
    if (this.pass.hasError('required')) {
      this.errorMessage2 = 'Debes llenar este campo';}
    else {
      this.errorMessage2 = '';
    }
  }
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  success=true;
  onSubmit(){
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);


      const formValue = this.loginForm.value;
      const newAccount:loginResponse={
        user:formValue.user,
        email:formValue.user,
        pass:formValue.pass,
      }

      for (let i = 0; i < this.accounts.length; i++) {
        if ((newAccount.email==this.accounts[i].email || newAccount.email==this.accounts[i].user) && newAccount.pass==this.accounts[i].pass) {
          console.log("Account encontrada");
          const username = this.accounts[i].user;
          this.authService.login(username);
          this.router.navigate([''])
      }
    }
      this.success=false;
      console.log("Account no encontrada");

  }
}}
