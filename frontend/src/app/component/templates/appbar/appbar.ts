import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import {  MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../../service/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css',
})
export class Appbar {
  appName: string;
  buttonName: string;

  constructor(private authService: AuthService, private router: Router) {
    this.appName = 'Cost and Carbon Aware Document Management System';
    this.buttonName = 'menu';
  }

 /**
  * Logs out the current user and navigates to the login page.
  */
  logout() {
    this.authService.firebaseSignOut().then(() => {
      console.log('User signed out successfully.');
      this.router.navigate(['/']);
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  }
}
