import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

import { PropertyService } from '../shared/property.service';

import { Property } from '../shared/property';

@Component({
  selector: 'app-gallery-main-property',
  templateUrl: './gallery-main-property.component.html',
  styleUrls: ['./gallery-main-property.component.css']
})
export class GalleryMainPropertyComponent implements OnInit {
  public property: Property;

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getMainGalleryProperty();
      });
  }

  ngOnInit() {
    this.getMainGalleryProperty();
  }

  getMainGalleryProperty() {
    this.property = this.propertyService.getMainGalleryProperty();
  }

  getCurrencySymbol(currency) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
