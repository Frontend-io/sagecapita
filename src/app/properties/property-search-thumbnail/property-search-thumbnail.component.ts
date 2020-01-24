import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

import { Property } from '../../shared/property';

@Component({
  selector: 'app-property-search-thumbnail',
  templateUrl: './property-search-thumbnail.component.html',
  styleUrls: ['./property-search-thumbnail.component.css']
})
export class PropertySearchThumbnailComponent implements OnInit {
  @Input () property: Property;

  constructor() { }

  ngOnInit() {
  }

  getCurrencySymbol(currency) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
