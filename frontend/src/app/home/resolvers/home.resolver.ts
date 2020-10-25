import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { HomeApiService } from './../../shared/api/home.api.service';

@Injectable()
export class HomeResolve implements Resolve<Observable<any>> {
  constructor(private service: HomeApiService) {}

  resolve(): Observable<any> {
    return this.service.getHomeData();
  }
}
