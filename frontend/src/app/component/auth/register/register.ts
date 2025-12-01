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
import { UserCredential } from 'firebase/auth';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formName: string;
  buttonText: string;
  imagePath: string;
  buttonList: LoginFormType[];
  userRegisterFormGroup: FormGroup;
  user: User;
  private _snackBar = inject(MatSnackBar);

  constructor(private router: Router, private authService: AuthService) {
    this.formName = 'Register';
    this.buttonText = 'Register';

    this.userRegisterFormGroup = new FormGroup({
      emailInputCtrl: new FormControl(''),
      passwordInputCtrl: new FormControl(''),
      roleInputCtrl: new FormControl(''),
    });
    this.buttonList = [
      {
        name: 'email',
        icon: 'email',
        placeholder: 'Enter your email',
        inputFormGroup: this.userRegisterFormGroup,
        inputControl: 'emailInputCtrl',
      },
      {
        name: 'password',
        icon: 'lock',
        placeholder: 'Enter your password',
        inputFormGroup: this.userRegisterFormGroup,
        inputControl: 'passwordInputCtrl',
      },
      {
        name: 'role',
        icon: 'lock',
        placeholder: 'Enter your role',
        inputFormGroup: this.userRegisterFormGroup,
        inputControl: 'roleInputCtrl',
      },
    ];
    this.imagePath = 'assets/images/image.png';
    this.user = { email: '', password: '' };
  }

  /**
   * Handles the register action and navigates to the document list page.
   */
  onRegister() : void {
    this.user.email = this.userRegisterFormGroup.value.emailInputCtrl;
    this.user.password = this.userRegisterFormGroup.value.passwordInputCtrl;
    const role = this.userRegisterFormGroup.value.roleInputCtrl;
    this._connectToAuthService(role);
  }

  /**
   *  Connects to the authentication provider to sign up the user.
   *
   * @param role
   */
  private _connectToAuthService(role: string): void {
    this.authService
      .firebaseSignUp(this.user, role)
      .then(async (userCredential: UserCredential ) => {
        this._signUpSuccess(userCredential, role);
      })
      .catch((error) => {
        this._signUpFailure();
      });
  }

  /**
   *  Handles successful sign-up actions.
   *
   * @param userCredential
   */
  private _signUpSuccess(userCredential: UserCredential, role: string): void {
    const user = userCredential.user;
    this.authService.setUserRole(userCredential.user.uid, role);
    this._snackBar.open('User registered successfully', 'Close', { duration: 3000 });
    this.router.navigate(['/']);
  }

  /**
   * Handles failed sign-up actions.
   */
  private _signUpFailure(): void {
    this._snackBar.open('Registration failed', 'Close', { duration: 3000 });
  }
}
