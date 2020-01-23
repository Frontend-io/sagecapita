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
    this.activeGroup = 'top_cities';
  }

  ngOnInit() {
    this.selectPropertyGroup(this.activeGroup);
  }

  public selectPropertyGroup(id) {
    this.propertyGroupService.getPropertiesGroup(id).subscribe(({ data }: any) => {
      this.propertyGroups = data;
      this.activeGroup = id;
    }, (err: any) => {
    });
  }

}
