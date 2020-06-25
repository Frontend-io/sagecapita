import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { GalleryProperty } from '../shared/gallery-property';

@Component({
  selector: 'app-gallery-sold-properties',
  templateUrl: './gallery-sold-properties.component.html',
  styleUrls: [
    './gallery-sold-properties.component.css',
    '../shared/gallery-properties-section.component.css'
  ]
})
export class GallerySoldPropertiesComponent implements OnInit {
  public soldProperties: GalleryProperty[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getSoldProperties();
      });
  }

  ngOnInit() {
    this.getSoldProperties();
  }

  getSoldProperties() {
    this.propertyService.getSoldProperties().subscribe(({data}) => {
      this.soldProperties = data;
    }, (err: any) => {
    });
  }

}
