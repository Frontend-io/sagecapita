import { Title, Meta } from '@angular/platform-browser';
import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthManagerService } from '../shared/auth-manager.service';
import { PropertyService } from '../shared/property.service';
import { Property } from '../shared/property';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../shared/app.properties-search.css']
})
export class HomeComponent implements OnInit {
  public propertyCodeForm = this.fb.group({
    code: ['']
  });
  public propertiesCount: number;
  public mainGalleryProperty: Property;
  public blogPhoto: string;
  public blogArticle: any;

  constructor(
    private fb: FormBuilder,
    private authManagerService: AuthManagerService,
    private propertyService: PropertyService,
    private homeService: HomeService,
    private meta: Meta,
    private title: Title,
    private router: Router) { }

  ngOnInit() {
    this.meta.updateTag({name: 'title', content: 'Home - Sagecapita'});
    this.title.setTitle('Home - Sagecapita');
    this.getPropertyCount();
    this.getMainGalleryProperty();
    this.getBlogArticle();
  }

  public onSignupClick(code: string): boolean {
    this.authManagerService.setRedirectUrl(`/properties/${code}`);
    this.router.navigate(['/login']);
    return false;
  }

  public onPropertySearch($event: any): void {
    const params
      = Object.keys($event)
        .filter((paramKey) => $event[paramKey])
        .reduce((acc, cur) => ({ ...acc, [cur]: $event[cur] }), {});

    this.router.navigate(['/properties'], { queryParams: params });
  }

  public searchPropertyCode(): void {
    const { code } = this.propertyCodeForm.value;

    if (code) {
      this.propertyService.propertyCodeExists(code)
        .subscribe(() => {
          this.router.navigate(['/properties', code]);
        }, (err: any) => {
          alert(err.message);
        });
    }
  }

  public getMainGalleryProperty() {
    this.propertyService.getMainGalleryProperty().subscribe((property: any) => {
      this.mainGalleryProperty = property;
    }, (err: any) => {
    });
  }

  public getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

  private getPropertyCount(): void {
    this.propertyService.propertyCount()
      .subscribe((propertiesCount) => {
        this.propertiesCount = propertiesCount;
      }, (err: any) => {
      });
  }

  private getBlogArticle(): void {
    this.homeService.getLastBlogPost()
      .subscribe((lastBlogPost) => {
        this.blogArticle = lastBlogPost;

        this.homeService.getLastBlogPostPhoto(lastBlogPost.featured_media)
          .subscribe((sourceUrl) => {
            this.blogPhoto = sourceUrl;
          }, (err: any) => {
          });
      }, (err: any) => {
      });
  }

}
