/*
@author    : Ece Caliskan <
*/
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../shared/material-import';
import { LoginFormType } from '../../../model/form-model';
import { AuthService } from '../../../service/auth/auth-service';
import { User } from '../../../model/user-model';

@Component({
  selector: 'app-login',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formName: string;
  buttonText: string;
  imagePath: string;
  buttonList: LoginFormType[];
  userLoginFormGroup: FormGroup;
  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.formName = 'Login';
    this.buttonText = 'Login';
    this.userLoginFormGroup = new FormGroup({
      emailInputCtrl: new FormControl(''),
      passwordInputCtrl: new FormControl(''),
    });
    this.buttonList = [
      {
        name: 'email',
        icon: 'email',
        placeholder: 'Enter your email',
        inputFormGroup: this.userLoginFormGroup,
        inputControl: 'emailInputCtrl',
      },
      {
        name: 'password',
        icon: 'lock',
        placeholder: 'Enter your password',
        inputFormGroup: this.userLoginFormGroup,
        inputControl: 'passwordInputCtrl',
      },
    ];
    this.imagePath = 'assets/images/image.png';
    this.user = { email: '', password: '' };
  }

  /**
   * Handles the login action and navigates to the document list page.
   *
   */
  onLogin() {
    this.user.email = this.userLoginFormGroup.value.emailInputCtrl;
    this.user.password = this.userLoginFormGroup.value.passwordInputCtrl;
    this.authService
      .firebaseSignIn(this.user)
      .then((userCredential) => {
        console.log('Login successful:', userCredential);
        this.router.navigate(['/list']);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  }
}
