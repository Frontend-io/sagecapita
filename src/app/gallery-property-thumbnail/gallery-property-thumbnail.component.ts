import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrencySymbol } from '@angular/common';

import { AuthManagerService } from '../shared/auth-manager.service';
import { GalleryProperty } from '../shared/gallery-property';

@Component({
  selector: 'app-gallery-property-thumbnail',
  templateUrl: './gallery-property-thumbnail.component.html',
  styleUrls: [
    './gallery-property-thumbnail.component.css'
  ]
})
export class GalleryPropertyThumbnailComponent implements OnInit {
  @Input () property: GalleryProperty;

  constructor(private router: Router, private authManagerService: AuthManagerService) { }

  ngOnInit() {
  }

  public onSignupClick(code: string): boolean {
    this.authManagerService.setRedirectUrl(`/properties/${code}`);
    this.router.navigate(['/login']);
    return false;
  }

  getCurrencySymbol(currency) {
    return getCurrencySymbol(currency, 'narrow');
  }

}
