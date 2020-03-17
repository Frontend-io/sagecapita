import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ContactService } from '../shared/contact.service';
import { countries } from '../shared/countries.json';
import { languages } from '../shared/languages.json';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
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

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
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

    this.formMessage = 'Submitting...';
    this.isSubmitting = true;

    this.contactService.createContact(body)
      .subscribe((res: any) => {
        this.isSubmitting = false;

        this.formMessage = 'Thank you for your request. A member of our team will contact you shortly.';

        this.contactForm.reset();
      }, (err: any) => {
        this.formMessage = err.message;

        this.isSubmitting = false;
      });
  }

  get contactFormControls(): any {
    return this.contactForm['controls'];
  }

}
