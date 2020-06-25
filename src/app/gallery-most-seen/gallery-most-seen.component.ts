import { Component, OnInit, Input } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { GalleryProperty } from '../shared/gallery-property';

@Component({
  selector: 'app-gallery-most-seen',
  templateUrl: './gallery-most-seen.component.html',
  styleUrls: [
    './gallery-most-seen.component.css',
    '../shared/gallery-properties-section.component.css'
  ]
})
export class GalleryMostSeenComponent implements OnInit {
  public mostSeenProperties: GalleryProperty[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getMostSeen();
      });
  }

  ngOnInit() {
    this.getMostSeen();
  }

  getMostSeen() {
    this.propertyService.getMostSeen().subscribe(({ data }) => {
      this.mostSeenProperties = data;
    }, (err: any) => {
    });
  }

}
