import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  public mediaForm = this.fb.group({
    first_name: ['', Validators.required],
    email: ['', Validators.required],
    magazine: ['', Validators.required],
    country: ['', Validators.required],
    message: ['', Validators.required]
  });
  public headlineSearchForm = this.fb.group({
    headline: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
