/*
@author    : Ece Caliskan <
*/
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../shared/material-import';
import { LoginFormType } from '../../../model/form-model';

@Component({
  selector: 'app-login',
  imports: [ MaterialModule, MatFormFieldModule, MatFormFieldModule, MatLabel, MatInputModule, MatIconModule, MatButtonModule, MatCard],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formName: string;
  buttonText: string;
  imagePath: string;
  buttonList: LoginFormType[];
  userLoginFormGroup: FormGroup;
  user:{email: string, password: string};

    constructor(private router: Router){
      this.formName = 'Login';
      this.buttonText = 'Login';
      this.userLoginFormGroup = new FormGroup({'emailInputCtrl': new FormControl(''), 'passwordInputCtrl': new FormControl('')});
      this.buttonList = [
        {name: 'email', icon: 'email', placeholder: 'Enter your email', inputFormGroup: this.userLoginFormGroup, inputControl: 'emailInputCtrl'},
        {name: 'password', icon: 'lock', placeholder: 'Enter your password', inputFormGroup: this.userLoginFormGroup, inputControl: 'passwordInputCtrl'}];
      this.imagePath = 'assets/images/image.png';
      this.user = {email: '', password: ''};
    }
    
    /**
     * Handles the login action and navigates to the document list page.
     * 
     */
    onLogin() {
      this.user.email = this.userLoginFormGroup.value.emailInputCtrl;
      this.user.password = this.userLoginFormGroup.value.passwordInputCtrl;
      console.log(this.user);
      this.router.navigate(['/list']);}
}
