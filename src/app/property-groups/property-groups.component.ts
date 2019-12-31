import { Component, OnInit } from '@angular/core';

import { PropertyGroupService } from '../shared/property-group.service';

import { PropertyGroup } from '../shared/property-group';

@Component({
  selector: 'app-property-groups',
  templateUrl: './property-groups.component.html',
  styleUrls: ['./property-groups.component.css']
})
export class PropertyGroupsComponent implements OnInit {
  public propertyGroups: Array<PropertyGroup> = [];
  public activeGroup: string;

  constructor(private propertyGroupService: PropertyGroupService) {
    this.activeGroup = 'city';
  }

  ngOnInit() {
    this.selectPropertyGroup(this.activeGroup);
  }

  selectPropertyGroup(id) {
    this.propertyGroups = this.propertyGroupService.getPropertiesGroup(id);
    this.activeGroup = id;
  }

}
