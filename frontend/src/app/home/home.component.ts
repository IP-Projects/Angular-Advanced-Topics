import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { LoginService } from '../shared/api/login.service.api';
import { HomeApiService } from './../shared/api/home.api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();
  data: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    private service: HomeApiService
  ) {
    this.data = this.activatedRoute.snapshot.data.data;
  }

  data$ = this.service.getHomeData();
  // getData(): Observable<any> {
  //   return this.service.getHomeData().pipe(first());
  // }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
