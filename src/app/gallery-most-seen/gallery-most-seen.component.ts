import { Component, OnInit, Input } from '@angular/core';

import { PropertyService } from '../shared/property.service';
import { Property } from '../shared/property';

@Component({
  selector: 'app-gallery-most-seen',
  templateUrl: './gallery-most-seen.component.html',
  styleUrls: [
    './gallery-most-seen.component.css',
    '../shared/gallery-properties-section.component.css'
  ]
})
export class GalleryMostSeenComponent implements OnInit {
  public mostSeenProperties: Property[];

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
    this.mostSeenProperties = this.propertyService.getMostSeen();
  }

}
