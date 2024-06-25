import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth_service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private auth:AuthService){

  }
  username:string="";
  ngOnInit(): void {
    this.auth.username$.subscribe(
      username => {
        this.username = username;
      }
    );
  }


}
