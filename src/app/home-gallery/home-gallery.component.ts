import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../shared/property.service';

import { Property } from '../shared/property';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {
  properties: Array<Property>;

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getHomeThumbnailProperties();
      });
  }

  ngOnInit() {
    this.getHomeThumbnailProperties();
  }

  getHomeThumbnailProperties() {
    this.properties = this.propertyService.getHomeThumbnailProperties();
  }
}
