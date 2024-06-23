import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent  {
  isAuthenticated = false;
  username: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // Redirigir a la página de inicio después del logout
  }
}
