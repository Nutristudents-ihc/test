import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app_web';
  cookieExists: boolean = false;
  constructor(private cookie:CookieService,private auth:AuthService) { }
  ngOnInit():void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cookieExists=this.cookie.check('user');
    this.autoLogin();
  }

  autoLogin(){
    if(this.cookieExists){
      this.auth.login(this.cookie.get('user'));
    }
  }
}
