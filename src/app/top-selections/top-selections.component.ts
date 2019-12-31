import { Component, OnInit } from '@angular/core';

import { Property } from '../shared/property';

import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-top-selections',
  templateUrl: './top-selections.component.html',
  styleUrls: ['./top-selections.component.css']
})
export class TopSelectionsComponent implements OnInit {
  topSelections: Array <Property>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.topSelections = this.propertyService.getTopSelections();
  }

}
