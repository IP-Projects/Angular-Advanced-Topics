import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.authService.userSubject.value}`,
  });

  constructor(private http: HttpClient, private authService: AuthService) {}

  getHomeData(): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/api/unknown`, {
        headers: this.headers,
      })
      .pipe(
        map((x) => {
          console.log(x.data);
          return x.data;
        })
      );
  }
}
