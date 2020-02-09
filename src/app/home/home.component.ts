import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../shared/app.properties-search.css']
})
export class HomeComponent implements OnInit {
  public propertyCodeForm = this.fb.group({
    code: ['']
  });
  public propertiesCount: number;

  constructor(private fb: FormBuilder, private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.getPropertyCount();
  }

  public onPropertySearch($event: any): void {
    this.router.navigate(['/properties'], { queryParams: $event });
  }

  public searchPropertyCode(): void {
    const { code } = this.propertyCodeForm.value;

    if (code) {
      this.propertyService.propertyCodeExists(code)
        .subscribe(() => {
          this.router.navigate(['/properties', code]);
        }, (err: any) => {
          alert(err.message);
        });
    }
  }

  private getPropertyCount(): void {
    this.propertyService.propertyCount()
        .subscribe((propertiesCount) => {
          this.propertiesCount = propertiesCount;
        }, (err: any) => {
        });
  }

}
