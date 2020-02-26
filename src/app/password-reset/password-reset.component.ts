import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordResetService } from './password-reset.service';
import { getQueryStringParams } from '../shared/getQueryStringParameters';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  public formMessage = 'Please enter your new password';
  public passwordResetForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    password_confirmation: ['']
  }, { validator: this.checkPasswords });
  public isSubmitting = false;

  constructor(private fb: FormBuilder, public passwordResetService: PasswordResetService) { }

  ngOnInit() {
  }

  public submit(): void {
    if (!this.passwordResetForm.valid) {
      return;
    }

    const passwordResetFormValue = this.passwordResetForm.value;
    const { password, password_confirmation } = passwordResetFormValue;

    this.formMessage = 'Submitting...';
    this.isSubmitting = true;

    this.passwordResetService.passwordReset({...getQueryStringParams(), password, password_confirmation})
      .subscribe((res: any) => {
        this.isSubmitting = false;
        this.formMessage = 'Success, you can proceed to login now with your shiny new password!';
      }, (err: any) => {
        this.isSubmitting = false;
        this.formMessage = err.message;
      });
  }

  private checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('password_confirmation').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  get passwordResetFormControls(): any {
    return this.passwordResetForm['controls'];
  }
}
