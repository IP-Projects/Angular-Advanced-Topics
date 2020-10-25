import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  // until a backend is ready
  private mockLogin(loginInfo: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  async login(): Promise<void> {
    if (this.formGroup.valid) {
      const response = await this.mockLogin(this.formGroup.getRawValue());
      if (response) {
        this.router.navigate(['home']);
      }
    }
  }
}
