import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    profession: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    language: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
  });
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  public forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  public isSubmittingRegisterForm = false;
  public isSubmittingLoginForm = false;
  public isSubmittingForgotPasswordForm = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get forgotPasswordFormControls(): any {
    return this.forgotPasswordForm['controls'];
  }

  get registerFormControls(): any {
    return this.registerForm['controls'];
  }

  get loginFormControls(): any {
    return this.loginForm['controls'];
  }
}
