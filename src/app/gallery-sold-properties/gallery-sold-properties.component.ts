import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { Property } from '../shared/property';

@Component({
  selector: 'app-gallery-sold-properties',
  templateUrl: './gallery-sold-properties.component.html',
  styleUrls: [
    './gallery-sold-properties.component.css',
    '../shared/gallery-properties-section.component.css'
  ]
})
export class GallerySoldPropertiesComponent implements OnInit {
  public soldProperties: Property[];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.soldProperties = this.propertyService.getSoldProperties();
  }

}
