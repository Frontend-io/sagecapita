import { Component, OnInit } from '@angular/core';

import { Property } from '../shared/property';

import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-exclusive-properties',
  templateUrl: './exclusive-properties.component.html',
  styleUrls: ['./exclusive-properties.component.css']
})
export class ExclusivePropertiesComponent implements OnInit {
  public exclusiveProperties: Property[] = [];
  public exclusivePropertiesTotal: number;

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getExclusiveProperties();
      });
  }

  ngOnInit() {
    this.getExclusiveProperties();
  }

  getExclusiveProperties() {
    this.propertyService.getExclusiveProperties()
      .subscribe(({ data, total }: any) => {
        this.exclusiveProperties = data;
        this.exclusivePropertiesTotal = total;
      }, (err: any) => {
      });
  }
}
