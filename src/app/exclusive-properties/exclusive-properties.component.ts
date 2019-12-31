import { Component, OnInit } from '@angular/core';

import { Property } from '../shared/property';

import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-exclusive-properties',
  templateUrl: './exclusive-properties.component.html',
  styleUrls: ['./exclusive-properties.component.css']
})
export class ExclusivePropertiesComponent implements OnInit {
  exclusiveProperties: Array <Property>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.exclusiveProperties = this.propertyService.getExclusiveProperties();
  }
}
