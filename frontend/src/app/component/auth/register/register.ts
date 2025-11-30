import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
export interface LoginFormType {
  name: string,
  icon: string,
  placeholder: string
}
@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatFormFieldModule, MatLabel, MatInputModule, MatIconModule, MatButtonModule, MatCard],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formName: string;
  buttonText: string;
  imagePath: string;
  buttonList: LoginFormType[];

    constructor(private router: Router){
      this.formName = 'Register';
      this.buttonText = 'Register';
      this.buttonList = [
        {name: 'email', icon: 'email', placeholder: 'Enter your email'},
        {name: 'password', icon: 'lock', placeholder: 'Enter your password'},
        {name: 'role', icon: 'lock', placeholder: 'Enter your role'}];
      this.imagePath = 'assets/images/image.png';
    }
    
    /**
     * 
     * Handles the register action and navigates to the document list page.
     */
    onRegister() {
       this.router.navigate(['/list']);}
}
