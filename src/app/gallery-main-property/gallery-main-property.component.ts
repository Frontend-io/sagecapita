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
  public property = {};

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
    this.propertyService.getMainGalleryProperty().subscribe((property: any) => {
      this.property = property;
    }, (err: any) => {
    });
  }

  getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
