import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PropertyGroupService } from '../shared/property-group.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public propertyGroupsList;
  public videoCount;
  public galleryForm = this.fb.group({
    suburb: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    type: ['', Validators.required],
    price: ['', Validators.required],
    country: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private propertyGroupService: PropertyGroupService, private fb: FormBuilder) { }

  ngOnInit() {
    this.propertyGroupsList = this.propertyGroupService.getPropertyGroupsList();

    this.propertyGroupService.getPropertyGroupsList().subscribe((data) => {
      this.propertyGroupsList = data.property_groups_list;
      this.videoCount = data.video_count;
    }, (err: any) => {
    });
  }

}
