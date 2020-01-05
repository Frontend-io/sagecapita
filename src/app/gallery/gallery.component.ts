import { Component, OnInit } from '@angular/core';

import { PropertyGroupService } from '../shared/property-group.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public propertyGroupsList;

  constructor(private propertyGroupService: PropertyGroupService) { }

  ngOnInit() {
    this.propertyGroupsList = this.propertyGroupService.getPropertyGroupsList();
  }

}
