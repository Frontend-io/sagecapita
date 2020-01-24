import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { GalleryProperty } from '../shared/gallery-property';

@Component({
  selector: 'app-gallery-recently-uploaded',
  templateUrl: './gallery-recently-uploaded.component.html',
  styleUrls: [
    './gallery-recently-uploaded.component.css',
    '../shared/gallery-properties-section.component.css'
  ]
})
export class GalleryRecentlyUploadedComponent implements OnInit {
  public recentUploadedProperties: GalleryProperty[];

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
    this.propertyService.getRecentlyUploaded().subscribe(({ data }) => {
      this.recentUploadedProperties = data;
    }, (err: any) => {
    });
  }

}
