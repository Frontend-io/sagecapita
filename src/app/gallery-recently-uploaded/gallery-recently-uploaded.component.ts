import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { Property } from '../shared/property';

@Component({
  selector: 'app-gallery-recently-uploaded',
  templateUrl: './gallery-recently-uploaded.component.html',
  styleUrls: [
    './gallery-recently-uploaded.component.css',
    '../shared/gallery-properties-section.component.css'
  ]
})
export class GalleryRecentlyUploadedComponent implements OnInit {
  public recentUploadedProperties: Property[];

  constructor(private propertyService: PropertyService) { 
    this.propertyService.subject$.subscribe(
      () => {
        this.getRecentlyUploaded();
      });
  }

  ngOnInit() {
    this.getRecentlyUploaded();
  }

  getRecentlyUploaded() {
    this.recentUploadedProperties = this.propertyService.getRecentlyUploaded();
  }

}
