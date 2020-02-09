import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  public isSubmitting = false;
  public submitMessage: string;

  constructor(public dialogRef: MatDialogRef<AuthModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data/*: DialogData*/,
              private fb: FormBuilder, private authManagerService: AuthService
  ) {
  }

  ngOnInit() {
  }

  login() {
    const loginFormValue = this.loginForm.value;
    const { email } = loginFormValue;
    const { password } = loginFormValue;

    this.isSubmitting = true;
    this.submitMessage = 'Submitting...';

    this.authManagerService.auth(email, password)
      .subscribe(res => {
        this.isSubmitting = false;
        this.submitMessage = res.message;

        this.dialogRef.close(res.jwt);
      }, (err: any) => {
        this.isSubmitting = false;

        this.submitMessage = err.message;
      });
  }

  get loginFormControls(): any {
    return this.loginForm['controls'];
  }

}
