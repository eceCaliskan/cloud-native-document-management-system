/*
@author    : Ece Caliskan <
*/
import { Component } from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

export interface LoginFormType {
  name: string,
  icon: string,
  placeholder: string
}

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatFormFieldModule, MatLabel, MatInputModule, MatIconModule, MatButtonModule, MatCard],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formName: string;
  buttonText: string;
  imagePath: string;
  buttonList: LoginFormType[];

    constructor(private router: Router){
      this.formName = 'Login';
      this.buttonText = 'Login';
      this.buttonList = [
        {name: 'email', icon: 'email', placeholder: 'Enter your email'},
        {name: 'password', icon: 'lock', placeholder: 'Enter your password'}];
      this.imagePath = 'assets/images/image.png';
    }
    
    /**
     * Handles the login action and navigates to the document list page.
     * 
     */
    onLogin() {
      this.router.navigate(['/list']);}
}
