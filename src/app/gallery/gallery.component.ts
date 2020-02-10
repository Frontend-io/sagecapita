import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { getCurrencySymbol } from '@angular/common';

import { PaginatorComponent } from '../paginator/paginator.component';

import { PropertyGroupService } from '../shared/property-group.service';
import { PropertiesService } from '../shared/properties.service';

import { getQueryStringParams } from '../shared/getQueryStringParameters';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements  OnInit, AfterViewInit {
  @ViewChildren('paginator') paginatorComponent: QueryList<PaginatorComponent>;

  public propertiesPaginationForm = this.fb.group({
    criteria: ['price ASC', Validators.required],
    numberPerPage: ['4', Validators.required]
  });
  public paginatorOptionsInitPage = 1;
  public paginatorOptionsDisplayedPages = 4;
  public paginatorOptionsLastPage = 10;
  public properties: any[];
  public totalProperties: number;
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

  constructor(private propertyGroupService: PropertyGroupService, private propertiesService: PropertiesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.propertyGroupsList = this.propertyGroupService.getPropertyGroupsList();

    this.propertyGroupService.getPropertyGroupsList().subscribe((data) => {
      this.propertyGroupsList = data.property_groups_list;
      this.videoCount = data.video_count;
    }, (err: any) => {
    });
  }

  ngAfterViewInit() {
    this.setPropertySearchData(getQueryStringParams());
    this.search();
  }

  public onPropertySearch(): void {
    this.search();
  }

  public search(args: any = {}): Promise<void> {
    const paginatorCurrentPage = args['page'] || this.paginatorComponent.first.getCurrentPage();
    const propertiesSearchData = this.getPropertySearchData();
    const paginationQueryData = this.getQueryPaginationValues();

    const paginationQueryDataCriteriaToks = paginationQueryData['criteria'].split(' ');

    const params = {
      page: paginatorCurrentPage,
      per_page: paginationQueryData['numberPerPage'],
      order_by_col: paginationQueryDataCriteriaToks[0],
      order_by_dir: paginationQueryDataCriteriaToks[1],
      state: propertiesSearchData['state'],
      city: propertiesSearchData['city'],
      suburb: propertiesSearchData['suburb'],
      type: propertiesSearchData['type'],
      price: propertiesSearchData['price'],
      video: true
    };

    return new Promise((resolve, reject) => {
      this.propertiesService.getProperties(params, {imgSizing: 'baseThumbUrl'}).subscribe((res: any) => {
        const { data, total, last_page } = res;

        this.properties = data;
        this.totalProperties = total;

        resolve(data);

        if (this.paginatorOptionsLastPage !== last_page) {
          this.paginatorOptionsLastPage = last_page;

          window.setTimeout(() => {
            this.paginatorComponent.forEach((paginator) => paginator.reRender());

            if (!data.length) {
              this.onPageClick({ newPage: 1 });
            }
          }, 0);
        }

      }, (err: any) => {
        reject(err);
      });
    });
  }

  public onPageClick({ newPage, cb = null }): void {
    this.search({ page: newPage }).then((data) => {
      if (cb) {
        cb();
      }

      this.paginatorComponent.forEach((paginator) => paginator.onSetPage(newPage));
    });
  }

  public getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

  private getPropertySearchData(): any {
    const { controls } = this.galleryForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);

    return body;
  }

  private setPropertySearchData(searchData: any): void {
    const {controls} = this.galleryForm;

    Object.keys(searchData)
      .forEach((controlName) => controls[controlName] && controls[controlName].setValue(searchData[controlName]));
    }

  private getQueryPaginationValues(): any {
    const { controls } = this.propertiesPaginationForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);

    return body;
  }

}
