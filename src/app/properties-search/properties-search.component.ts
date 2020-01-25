import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PropertyGroupService } from '../shared/property-group.service';

@Component({
  selector: 'app-properties-search',
  templateUrl: './properties-search.component.html',
  styleUrls: [
    './properties-search.component.css',
    '../shared/app.properties-search.css'
  ]
})
export class PropertiesSearchComponent implements OnInit {
  @Output() private search = new EventEmitter<void>();

  public propertyGroupsList: any;
  public searchForm = this.fb.group({
    state: [''],
    city: [''],
    suburb: [''],
    type: [''],
    price: ['']
  });

  constructor(private propertyGroupService: PropertyGroupService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getPropertyGroupsListWithCount();
  }

  private getPropertyGroupsListWithCount(): void {
    this.propertyGroupService.getPropertyGroupsListWithCount().subscribe((propertyGroupsListWithCount: any) => {
      this.propertyGroupsList = propertyGroupsListWithCount;
    }, (err: any) => {
    });
  }

  public onSubmit(): void {
    this.search.emit();
  }

  public getSearchData(): any {
    const { controls } = this.searchForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);

    return body;
  }
}
