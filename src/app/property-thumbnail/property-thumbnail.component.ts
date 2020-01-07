import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

// import { Property } from '../shared/property';

@Component({
  selector: 'app-property-thumbnail',
  templateUrl: './property-thumbnail.component.html',
  styleUrls: ['./property-thumbnail.component.css']
})
export class PropertyThumbnailComponent implements OnInit {
  @Input() property;

  constructor() { }

  ngOnInit() {
  }

  getCurrencySymbol(currency) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
