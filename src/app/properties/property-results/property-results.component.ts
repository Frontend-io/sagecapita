import { Component, OnInit } from '@angular/core';

import { Property } from '../../shared/property';

import { PropertyService } from '../../shared/property.service';

@Component({
  selector: 'app-property-results',
  templateUrl: './property-results.component.html',
  styleUrls: ['./property-results.component.css']
})
export class PropertyResultsComponent implements OnInit {
  searchResults: Property[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.searchProperties();
      });
  }

  ngOnInit() {
    this.searchProperties();
  }

  searchProperties() {
    this.searchResults = this.propertyService.searchProperties();
  }

}
