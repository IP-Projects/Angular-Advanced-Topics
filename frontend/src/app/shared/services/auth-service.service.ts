import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // for JWT auth
  // constructor(public jwtHelper: JwtHelperService) {}
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return true; // !this.jwtHelper.isTokenExpired(token);
  // }

  // for token auth - for demo purposes
  public userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor() {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.user = this.userSubject.asObservable();
  }

  public isAuthenticated(): boolean {
    return !!this.userSubject.value?.token;
  }
}
