import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

import { Property } from '../../shared/property';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
  @Input() property: any;

  constructor() {
  }

  ngOnInit() {
  }

  getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
