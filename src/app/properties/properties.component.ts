import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css', '../shared/app.properties-search.css']
})
export class PropertiesComponent implements OnInit {
  public propertiesPaginationForm = this.fb.group({
    criteria: ['price_up', Validators.required],
    numberPerPage: ['4', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public getPaginationValues(): any {
    const { controls } = this.propertiesPaginationForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);

    return body;
  }

}
