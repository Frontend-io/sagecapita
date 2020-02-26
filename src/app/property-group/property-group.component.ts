import { Component, OnInit, Input } from '@angular/core';

import { PropertyGroup } from '../shared/property-group';

@Component({
  selector: 'app-property-group',
  templateUrl: './property-group.component.html',
  styleUrls: ['./property-group.component.css']
})
export class PropertyGroupComponent implements OnInit {
  @Input () propertyGroup: PropertyGroup;
  @Input () propertyClass: string;

  public queryParams: any;

  constructor() { }

  ngOnInit() {
    this.queryParams = {[this.propertyClass]: this.propertyGroup.name};
  }

}
