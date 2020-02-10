import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { PropertiesService } from '../shared/properties.service';

import { Property } from '../shared/property';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {
  properties: Array<Property>;

  constructor(private propertyService: PropertyService, private propertiesService: PropertiesService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getHomeThumbnailProperties();
      });
  }

  ngOnInit() {
    this.getHomeThumbnailProperties();
  }

  getHomeThumbnailProperties() {
    const params = {
      per_page: 8,
      video: true
    };

    this.propertiesService.getProperties(params, {imgSizing: 'baseSmallThumbUrl'}).subscribe((res: any) => {
      const { data } = res;
      this.properties = data;

    }, (err: any) => {
    });
  }
}
