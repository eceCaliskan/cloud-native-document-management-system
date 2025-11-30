import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../shared/material-import';
export interface LoginFormType {
  name: string,
  icon: string,
  placeholder: string,
  inputFormGroup: FormGroup
  inputControl: string
}
@Component({
  selector: 'app-register',
  imports: [MaterialModule, MatFormFieldModule, MatFormFieldModule, MatLabel, MatInputModule, MatIconModule, MatButtonModule, MatCard],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formName: string;
  buttonText: string;
  imagePath: string;
  buttonList: LoginFormType[];
  userRegisterFormGroup: FormGroup;
  user:{email: string, password: string, role: string};

    constructor(private router: Router){
      this.formName = 'Register';
      this.buttonText = 'Register';
      this.userRegisterFormGroup = new FormGroup({'emailInputCtrl': new FormControl(''), 'passwordInputCtrl': new FormControl(''), 'roleInputCtrl': new FormControl('')});
      this.buttonList = [
        {name: 'email', icon: 'email', placeholder: 'Enter your email', inputFormGroup: this.userRegisterFormGroup, inputControl: 'emailInputCtrl'},
        {name: 'password', icon: 'lock', placeholder: 'Enter your password', inputFormGroup: this.userRegisterFormGroup, inputControl: 'passwordInputCtrl'},
        {name: 'role', icon: 'lock', placeholder: 'Enter your role', inputFormGroup: this.userRegisterFormGroup, inputControl: 'roleInputCtrl'}];
      this.imagePath = 'assets/images/image.png';
      this.user = {email: '', password: '', role: ''};
      
    }
    
    /**
     * Handles the register action and navigates to the document list page.
     */
    onRegister() {
      this.user.email = this.userRegisterFormGroup.value.emailInputCtrl;
      this.user.password = this.userRegisterFormGroup.value.passwordInputCtrl;
      this.user.role = this.userRegisterFormGroup.value.roleInputCtrl;
      console.log(this.user);
      this.router.navigate(['/list']);}
}
