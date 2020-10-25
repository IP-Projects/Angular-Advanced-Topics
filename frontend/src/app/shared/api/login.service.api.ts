import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../services/auth-service.service';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${environment.apiUrl}/api/login`, { email, password })
      .pipe(
        map(({ token }) => {
          const user: User = {
            email,
            token,
          };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.authService.userSubject.next(user);
          return user;
        })
      );
  }

  register(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${environment.apiUrl}/api/register`, { email, password })
      .pipe(
        map(({ token }) => {
          const user: User = {
            email,
            token,
          };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.authService.userSubject.next(user);
          return user;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.authService.userSubject.next(null);
  }
}
