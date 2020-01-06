import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getCurrencySymbol } from '@angular/common';

import { PropertyService } from '../../shared/property.service';

import { Property } from '../../shared/property';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
  private property: Property;
  private code: string;

  constructor(private propertyService: PropertyService, private route: ActivatedRoute) { 
    this.propertyService.subject$.subscribe(
      () => {
        this.getProperty(this.code);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>
      this.getProperty(paramMap.get('code'))
    );
  }

  getProperty(code) {
    this.property = this.propertyService.getProperty(code)
    this.code = code;
  }

  getCurrencySymbol(currency) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
