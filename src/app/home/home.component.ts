import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../shared/app.properties-search.css']
})
export class HomeComponent implements OnInit {
  public homeForm = this.fb.group({
    code: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
