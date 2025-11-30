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
  user: User ;

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
  onRegister() {
    this.user.email = this.userRegisterFormGroup.value.emailInputCtrl;
    this.user.password = this.userRegisterFormGroup.value.passwordInputCtrl;
    const role = this.userRegisterFormGroup.value.roleInputCtrl;
    this.authService.firebaseSignUp(this.user, role).then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user.uid);
        this.router.navigate(['/list']);
        // You can now send user.uid to your backend to assign roles
        // example:
        // this.http.post("/assign-role", { uid: user.uid })
      })
      .catch((error) => {
        console.error('Error during sign up:', error);
      });
  }
  
  
}
