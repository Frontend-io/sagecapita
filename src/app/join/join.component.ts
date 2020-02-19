import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { languages } from '../shared/languages.json';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  public joinForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    language: ['', Validators.required],
    role: ['', Validators.required],
    message: ['', Validators.required]
  });
  public languages = languages;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
