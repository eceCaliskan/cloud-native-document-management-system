/*
@author    : Ece Caliskan <
*/
import { Component, inject } from '@angular/core';
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
import { MatSnackBar } from '@angular/material/snack-bar';

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
  private _snackBar = inject(MatSnackBar);

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
  onLogin(): void {
    this.user.email = this.userLoginFormGroup.value.emailInputCtrl;
    this.user.password = this.userLoginFormGroup.value.passwordInputCtrl;
    this._connectToAuthService();
  }

  /**
   * Connects to the authentication provider to sign in the user.
   */
  private _connectToAuthService() {
    this.authService
      .firebaseSignIn(this.user)
      .then(async (userCredential) => {
        const token =  await userCredential.user.getIdTokenResult(true); // <— refresh token
        console.log(token); 
        this._signInSuccess();
      })
      .catch((error) => {
        this._signInFailure();
      });
  }

  /**
   * Handles successful sign-in actions.
   */
  private _signInSuccess() {
    this._snackBar.open('User logged in successfully', 'Close', { duration: 3000 } );
    this.router.navigate(['/list']);
  }

  /**
   * Handles failed sign-in actions.
   */
  private _signInFailure() {
    this._snackBar.open('Login failed', 'Close', { duration: 3000 } );
  } 
}
