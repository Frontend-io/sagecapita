import { Component, OnInit } from '@angular/core';

import { Property } from '../../shared/property';

import { PropertyService } from '../../shared/property.service';

@Component({
  selector: 'app-viewed-properties',
  templateUrl: './viewed-properties.component.html',
  styleUrls: ['./viewed-properties.component.css']
})
export class ViewedPropertiesComponent implements OnInit {
  viewedProperties: Property[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getViewedProperties();
      });
   }

  ngOnInit() {
    this.getViewedProperties();
  }

  public getViewedProperties(): void {
    this.propertyService.getViewedProperties().subscribe(({ data }: any) => {
      this.viewedProperties = data;
    }, (err: any) => {
    });
  }

}
