import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthManagerService } from '../shared/auth-manager.service';

import { CustomersService } from './customers.service';

import { countries } from '../shared/countries.json';
import { languages } from '../shared/languages.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formMessageRegisterForm: string;
  public formMessageLoginForm: string;
  public formMessageForgotPasswordForm: string;
  public registerForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    profession: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    language: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    password: ['', Validators.required],
    password_confirmation: ['']
  }, { validator: this.checkPasswords });
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
  public registerFormEmailUsed: boolean;
  public registerFormPhoneUsed: boolean;
  public languages = languages;
  public countries = countries;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private customersService: CustomersService,
    private authManagerService: AuthManagerService) { }

  ngOnInit() {
  }

  public submitRegisterForm(): void {
    if (!this.registerForm.valid) {
      return;
    }

    const { controls } = this.registerForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);
    body['country'] = controls['country'].value.toUpperCase();
    body['language'] = controls['language'].value.toUpperCase();

    this.formMessageRegisterForm = 'Submitting...';
    this.isSubmittingRegisterForm = true;

    this.registerFormEmailUsed = false;
    this.registerFormPhoneUsed = false;

    this.customersService.createCustomer(body)
      .subscribe((res: any) => {
        this.isSubmittingRegisterForm = false;

        this.formMessageRegisterForm = res.message;

        this.registerForm.reset();
      }, (err: any) => {
        this.formMessageRegisterForm = err.message;

        this.isSubmittingRegisterForm = false;

        if (err.status === 400) {
          const errors = JSON.parse(err.errors);

          if (errors['phone']) {
            this.registerFormPhoneUsed = true;
          }

          if (errors['email']) {
            this.registerFormEmailUsed = true;
          }
        }
      });
  }

  public submitLoginForm(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const loginFormValue = this.loginForm.value;
    const { email } = loginFormValue;
    const { password } = loginFormValue;

    this.formMessageLoginForm = 'Submitting...';
    this.isSubmittingLoginForm = true;

    this.authManagerService.auth(email, password)
      .subscribe(res => {
        this.isSubmittingLoginForm = false;
        this.formMessageLoginForm = res.message;

        if (this.authManagerService.getRedirectUrl()) {
          this.router.navigateByUrl(this.authManagerService.getRedirectUrl());

          this.authManagerService.resetRedirectUrl();
        } else {
          this.router.navigate(['/']);
        }
      }, (err: any) => {
        this.isSubmittingLoginForm = false;
        this.formMessageLoginForm = err.message;
      }/*, () => console.log('HTTP request completed.')*/);
  }

  public submitForgotPasswordForm(): void {
    if (!this.forgotPasswordForm.valid) {
      return;
    }

    this.formMessageForgotPasswordForm = 'Submitting...';
    this.isSubmittingForgotPasswordForm = true;

    this.customersService.forgotCustomerPassword(this.forgotPasswordForm['email'].value)
      .subscribe((res: any) => {
        this.isSubmittingForgotPasswordForm = false;

        this.formMessageForgotPasswordForm = res.message;

        this.forgotPasswordForm.reset();
      }, (err: any) => {
        this.formMessageForgotPasswordForm = err.message;

        this.isSubmittingForgotPasswordForm = false;
      });
  }

  private checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('password_confirmation').value;

    return pass === confirmPass ? null : { notSame: true };
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
