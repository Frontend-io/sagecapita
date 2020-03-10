import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PropertiesSearchComponent } from '../properties-search/properties-search.component';
import { PaginatorComponent } from '../paginator/paginator.component';

import { PropertiesService } from '../shared/properties.service';

import { getQueryStringParams } from '../shared/getQueryStringParameters';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: [
    './properties.component.css',
    '../shared/app.properties-search.css'
  ]
})
export class PropertiesComponent implements OnInit, AfterViewInit {
  @ViewChild(PropertiesSearchComponent, { static: false })
  private propertiesSearchComponent: PropertiesSearchComponent;

  @ViewChildren('paginator') paginatorComponent: QueryList<PaginatorComponent>;

  public propertiesPaginationForm = this.fb.group({
    criteria: ['created_at DESC', Validators.required],
    numberPerPage: ['4', Validators.required],
    isExclusive: ['']
  });
  public paginatorOptionsInitPage = 1;
  public paginatorOptionsDisplayedPages = 4;
  public paginatorOptionsLastPage = 10;
  public properties: any[];
  public totalProperties: number;
  public isSearchOpen = false;
  public propertiesTitle = 'Properties';

  private isInit: boolean;

  constructor(private fb: FormBuilder, private propertiesService: PropertiesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.init();

      this.route.queryParams.subscribe(() => {
        if (!this.isInit) {
          this.init();
        }
      });
    }, 0);
  }

  public toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  public onPropertySearch($event: any): void {
    this.search();
  }

  public search(args: any = {}): Promise<void> {
    const paginatorCurrentPage = args['page'] || this.paginatorComponent.first.getCurrentPage();
    const propertiesSearchData = this.propertiesSearchComponent.getSearchData();
    const paginationQueryData = this.getQueryPaginationValues();

    const paginationQueryDataCriteriaToks = paginationQueryData['criteria'].split(' ');

    const params = {
      page: paginatorCurrentPage,
      per_page: paginationQueryData['numberPerPage'],
      order_by_col: paginationQueryDataCriteriaToks[0],
      order_by_dir: paginationQueryDataCriteriaToks[1],
      is_exclusive: paginationQueryData['isExclusive'],
      state: propertiesSearchData['state'],
      city: propertiesSearchData['city'],
      suburb: propertiesSearchData['suburb'],
      type: propertiesSearchData['type'],
      price: propertiesSearchData['price']
    };

    return new Promise((resolve, reject) => {
      this.propertiesService
        .getProperties(params, { imgSizing: 'baseLargeThumbWidthUrl' })
        .subscribe((res: any) => {
          const { data, total, last_page } = res;

          if (this.isInit) {
            this.isInit = false;
          } else {
            this.propertiesTitle = 'Properties';

            const eParams = { ...params, criteria: paginationQueryData['criteria'] };

            delete eParams['order_by_col'];
            delete eParams['order_by_dir'];

            const newQueryString
              = Object.keys(eParams)
                .filter((key) => eParams[key])
                .reduce(((acc, cur) => `${acc}${acc ? '&' : ''}${cur}=${eParams[cur]}`), '');

            history.replaceState(null, '', `${location.pathname}?${newQueryString}`);
          }

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

  private init(): void {
    const queryParams = getQueryStringParams();

    this.isInit = true;

    if (queryParams['is_exclusive'] === '1') {
      this.propertiesTitle = 'Exclusive Properties';
    }

    this.propertiesPaginationForm
      .controls['isExclusive']
      .setValue(queryParams['is_exclusive'] || '');

    this.propertiesPaginationForm
      .controls['criteria']
      .setValue(queryParams['criteria'] || 'created_at DESC');

    switch (queryParams['criteria']) {
      case 'views|inquiries DESC':
        this.propertiesTitle = 'Featured Properties';
        break;
      case 'created_at DESC':
        this.propertiesTitle = 'New Listings';
        break;
      case 'viewed_at DESC':
        this.propertiesTitle = 'Viewed Properties';
        break;
    }

    ['city', 'state', 'type'].some((key) => {
      if (key in queryParams) {
        this.propertiesTitle = `${queryParams[key]} ${key.substring(0, 1).toUpperCase()}${key.substring(1).toLowerCase()} Properties`;
        return true;
      }

      return false;
    });

    this.propertiesSearchComponent.setSearchData(queryParams);

    this.search();
  }

  private getQueryPaginationValues(): any {
    const { controls } = this.propertiesPaginationForm;
    const body = {};

    Object.keys(controls)
      .forEach((control) => body[control] = controls[control].value);

    return body;
  }

}
