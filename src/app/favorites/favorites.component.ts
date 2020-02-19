import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { PropertiesSearchComponent } from '../properties-search/properties-search.component';
import { PaginatorComponent } from '../paginator/paginator.component';

import { FavoritesService } from './favorites.service';
import { AuthManagerService } from '../shared/auth-manager.service';

import { getQueryStringParams } from '../shared/getQueryStringParameters';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: [
    './favorites.component.css',
    '../shared/app.properties-search.css'
  ]
})
export class FavoritesComponent implements OnInit, AfterViewInit {
  @ViewChild(PropertiesSearchComponent, { static: false })
  private propertiesSearchComponent: PropertiesSearchComponent;

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

  constructor(
    private fb: FormBuilder,
    private favoritesService: FavoritesService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private authManagerService: AuthManagerService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.checkLogin()
      .then(() => {
        this.propertiesSearchComponent.setSearchData(getQueryStringParams());
        this.search();
      })
      .catch(() => { });
  }

  public onPropertySearch($event: any): void {
    this.checkLogin()
      .then(() => {
        this.search();
      })
      .catch(() => { });
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
      state: propertiesSearchData['state'],
      city: propertiesSearchData['city'],
      suburb: propertiesSearchData['suburb'],
      type: propertiesSearchData['type'],
      price: propertiesSearchData['price']
    };

    return new Promise((resolve, reject) => {
      this.favoritesService.getFavorites(params).subscribe((res: any) => {
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
        switch (err.status) {
          case 401:
            this.actionAfterNotLoggedIn();
            break;
          default:
            window.alert(err.message);
            break;
        }

        reject(err);
      });
    });
  }

  public onPageClick({ newPage, cb = null }): void {
    this.checkLogin()
      .then(() => {
        this.search({ page: newPage }).then((data) => {
          if (cb) {
            cb();
          }

          this.paginatorComponent.forEach((paginator) => paginator.onSetPage(newPage));
        });
      })
      .catch(() => { });
  }

  private checkLogin(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.authManagerService.checkAuth()
        .then(() => resolve())
        .catch(() => {
          this.actionAfterNotLoggedIn();
          reject();
        });
    });
  }

  private actionAfterNotLoggedIn(): void {
    if (window.confirm('Kindly login to see your favorites')) {
      this.authManagerService.setRedirectUrl(this.router.url);
      this.router.navigate(['/login']);
    } else {
      if (this.location.getState()['navigationId'] === 1) {
        this.router.navigate(['../'], { relativeTo: this.route });
      } else {
        this.location.back();
      }
    }
  }

  private getQueryPaginationValues(): any {
    const { controls } = this.propertiesPaginationForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);

    return body;
  }

}
