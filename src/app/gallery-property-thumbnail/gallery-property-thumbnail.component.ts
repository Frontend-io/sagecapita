import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

import { GalleryProperty } from '../shared/gallery-property';

@Component({
  selector: 'app-gallery-property-thumbnail',
  templateUrl: './gallery-property-thumbnail.component.html',
  styleUrls: [
    './gallery-property-thumbnail.component.css'
  ]
})
export class GalleryPropertyThumbnailComponent implements OnInit {
  @Input () property: GalleryProperty;

  constructor() { }

  ngOnInit() {
  }

  getCurrencySymbol(currency) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
