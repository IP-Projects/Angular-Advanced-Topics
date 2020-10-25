import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string): Observable<User> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/login`, { username, password })
      .pipe(
        map(({ token }) => {
          const user: User = {
            username,
            token,
          };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
  }
}
