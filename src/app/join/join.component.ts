import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { languages } from '../shared/languages.json';
import { countries } from '../shared/countries.json';

import { JoinService } from './join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  public joinForm = this.fb.group({
    full_name: ['', [Validators.required, Validators.maxLength(255)]],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', Validators.required],
    language: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    role: ['', Validators.required],
    message: ['', Validators.required],
    privacy_policy_check: ['', Validators.requiredTrue]
  });
  public languages = languages;
  public countries = countries;
  public cv: File;
  public formMessage = 'Please fill the form below to apply for one our open positions.';
  public isSubmitting = false;
  public attachedStatus = 'UPLOAD YOUR CV';

  constructor(private fb: FormBuilder, private joinService: JoinService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Join - Sagecapita' });
    this.title.setTitle('Join - Sagecapita');
  }

  public handleFileInput(files: FileList) {
    const file = files.item(0);

    if (file.type === 'application/pdf') {
      if (file.size <= 102400 * 15) {
        this.cv = file;

        this.formMessage = '';
        this.attachedStatus = 'ATTACHED';
      } else {
        this.formMessage = 'PDFs must be 15mb or less';
      }
    } else {
      this.formMessage = 'Only PDFs allowed';
    }
  }

  public onSubmit(): void {
    if (!this.cv || !this.joinForm.valid) {
      return;
    }

    const { controls } = this.joinForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);
    body['country'] = controls['country'].value.toUpperCase();
    body['language'] = controls['language'].value.toUpperCase();
    body['privacy_policy_check'] = !!controls['privacy_policy_check'].value;

    this.formMessage = 'Submitting...';
    this.isSubmitting = true;

    this.joinService.submit(this.cv, body)
      .subscribe((res) => {
        this.isSubmitting = false;

        this.formMessage = res.message;

        this.joinForm.reset();
        this.cv = undefined;
      }, (err: any) => {
        this.formMessage = err.message;

        this.isSubmitting = false;
      });
  }

  public scrollToElementID(elementID: string) {
     window.scroll(0, document.getElementById(elementID).offsetTop);
  }

  get joinFormControls(): any {
    return this.joinForm['controls'];
  }
}
