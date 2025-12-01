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

  /**
   * Signs out the currently logged-in user.
   * 
   * @returns Promise that resolves when the user is signed out. 
   */
  firebaseSignOut(): Promise<void> {
    return this.auth.signOut();
  }
   
  /**
   * Sets the user role by calling the backend API.
   * 
   * @param uuid 
   * @param user_role 
   * @returns 
   */
  setUserRole(uuid: string, user_role: string): Promise<any> {
    // Call backend API to set user role
    const url = `http://localhost:8000/user_role?uuid=${uuid}&user_role=${user_role}`;
    return fetch(url).then(async response => {
      response.json()
    });
  }
}
