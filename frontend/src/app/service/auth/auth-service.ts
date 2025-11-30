import { Injectable } from '@angular/core';
import { User } from '../../model/user-model';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';


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

  /**
   * Logs in a user with email and password.
   * 
   * @param email  The user's email.
   * @param password  The user's password.
   * @returns  Promise resolving to the user credentials.
   */
  firebaseSignIn(user: User): Promise<any> {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
   
}
