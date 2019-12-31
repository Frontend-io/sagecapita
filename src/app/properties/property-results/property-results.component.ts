import { Component, OnInit } from '@angular/core';

import { Property } from '../../shared/property';

import { PropertyService } from '../../shared/property.service';

@Component({
  selector: 'app-property-results',
  templateUrl: './property-results.component.html',
  styleUrls: ['./property-results.component.css']
})
export class PropertyResultsComponent implements OnInit {
  searchResults: Array <Property>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.searchResults = this.propertyService.searchProperties();
  }

}
