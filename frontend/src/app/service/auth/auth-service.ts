import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { User } from '../../model/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: Auth;

  constructor() {
    this.auth = getAuth();
  }

  /**
   * Registers a new user with email and password.
   * 
   * @param user  The user object containing email and password.
   * @param role  The role of the user.
   * @returns  Promise resolving to the user credentials.
   */
  firebaseSignUp(user: User, role: string): Promise<any> {
   return createUserWithEmailAndPassword(this.auth, user.email, user.password)     
  }
}
