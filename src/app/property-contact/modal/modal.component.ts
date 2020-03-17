import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { ContactService } from '../../shared/contact.service';
import { AuthManagerService } from '../../shared/auth-manager.service';

import { countries } from '../../shared/countries.json';
import { languages } from '../../shared/languages.json';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public contactForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.maxLength(50)]],
    last_name: ['', [Validators.required, Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    language: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    message: ['', Validators.required],
    privacy_policy_check: ['', Validators.requiredTrue]
  });
  public formMessage = 'Leave your request and we\'ll contact you in the next 24 hours.';
  public isSubmitting = false;
  public countries = countries;
  public languages = languages;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private authManagerService: AuthManagerService,
    private contactService: ContactService) { }

  ngOnInit() {
    this.authManagerService
      .getLoggedInUser()
      .then((user) => {
        Object.keys(this.contactFormControls)
          .forEach((contactFormControlName) => {
            if (user[contactFormControlName]) {
              this.contactFormControls[contactFormControlName]
                .setValue(user[contactFormControlName]);
            }
          });
      });
  }

  public onSubmit(): void {
    if (!this.contactForm.valid) {
      return;
    }

    const { controls } = this.contactForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);
    body['country'] = controls['country'].value.toUpperCase();
    body['language'] = controls['language'].value.toUpperCase();
    body['privacy_policy_check'] = !!controls['privacy_policy_check'].value;

    body['property_code'] = this.getCode().toUpperCase();

    this.formMessage = 'Submitting...';
    this.isSubmitting = true;

    this.contactService.createContact(body)
      .subscribe((res: any) => {
        this.isSubmitting = false;

        this.formMessage = 'Thanks for your request. A team member will contact you shortly.';

        this.contactForm.reset();
      }, (err: any) => {
        this.formMessage = err.message;

        this.isSubmitting = false;
      });
  }

  private getCode(): string {
    const url = location.href;

    return url.substring(url.lastIndexOf('/') + 1);
  }

  get contactFormControls(): any {
    return this.contactForm['controls'];
  }

}
