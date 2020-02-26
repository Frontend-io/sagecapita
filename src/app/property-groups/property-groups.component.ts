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
  public activeClass: string;

  constructor(private propertyGroupService: PropertyGroupService) {
    this.activeGroup = 'top_cities';
    this.activeClass = 'city';
  }

  ngOnInit() {
    this.selectPropertyGroup(this.activeGroup, this.activeClass);
  }

  public selectPropertyGroup(id: string, propertyClass: string) {
    this.propertyGroupService.getPropertiesGroup(id).subscribe(({ data }: any) => {
      this.propertyGroups = data;
      this.activeGroup = id;
      this.activeClass = propertyClass;
    }, (err: any) => {
    });
  }

}
