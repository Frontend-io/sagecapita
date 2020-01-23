import { Component, OnInit } from '@angular/core';

import { Property } from '../shared/property';

import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-latest-acquisitions',
  templateUrl: './latest-acquisitions.component.html',
  styleUrls: ['./latest-acquisitions.component.css']
})
export class LatestAcquisitionsComponent implements OnInit {
  latestAcquisitions: Array<Property>;

  constructor(private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getLatestAcquisitions();
      });
  }

  ngOnInit() {
    this.getLatestAcquisitions();
  }

  getLatestAcquisitions() {
    this.propertyService.getLatestAcquisitions().subscribe(({ data }: any) => {
      this.latestAcquisitions = data;
    }, (err: any) => {
    });
  }

}
