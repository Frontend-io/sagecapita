import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrencySymbol } from '@angular/common';

import { AuthManagerService } from '../shared/auth-manager.service';
import { PropertyService } from '../shared/property.service';

import { Property } from '../shared/property';

@Component({
  selector: 'app-gallery-main-property',
  templateUrl: './gallery-main-property.component.html',
  styleUrls: ['./gallery-main-property.component.css']
})
export class GalleryMainPropertyComponent implements OnInit {
  public property: Property;

  constructor(
    private router: Router,
    private authManagerService: AuthManagerService,
    private propertyService: PropertyService) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getMainGalleryProperty();
      });
  }

  ngOnInit() {
    this.getMainGalleryProperty();
  }

  public onSignupClick(code: string): boolean {
    this.authManagerService.setRedirectUrl(`/properties/${code}`);
    this.router.navigate(['/login']);
    return false;
  }

  getMainGalleryProperty() {
    this.propertyService.getMainGalleryProperty().subscribe((property: any) => {
      this.property = property;
    }, (err: any) => {
    });
  }

  getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
