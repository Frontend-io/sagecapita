import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrencySymbol } from '@angular/common';

import { AuthManagerService } from '../../shared/auth-manager.service';
import { Property } from '../../shared/property';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
  @Input() property: any;

  public propertyLink = `${encodeURIComponent(location.href)}`;

  constructor(private router: Router, private authManagerService: AuthManagerService) {
  }

  ngOnInit() {
  }

  public onSignupClick(code: string): boolean {
    this.authManagerService.setRedirectUrl(`/properties/${code}`);
    this.router.navigate(['/login']);
    return false;
  }

  public getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }
}
