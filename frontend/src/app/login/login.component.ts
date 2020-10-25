import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LoginService } from './../shared/api/login.service.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.formGroup = this.formBuilder.group({
      username: ['eve.holt@reqres.in', Validators.required],
      password: ['aaa', Validators.required],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  register(): void {
    if (this.formGroup.valid) {
      const form = this.formGroup.getRawValue();
      this.loginService
        .register(form.username, form.password)
        .pipe(takeUntil(this.destroy$)) // .pipe(first())
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['home']);
          }
        });
    }
  }

  login(): void {
    if (this.formGroup.valid) {
      const form = this.formGroup.getRawValue();
      this.loginService
        .login(form.username, form.password)
        .pipe(takeUntil(this.destroy$)) // .pipe(first())
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['home']);
          }
        });
    }
  }
}
