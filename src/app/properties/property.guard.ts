import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PropertyService } from '../shared/property.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyGuard implements CanActivate {
  constructor(private propertyService: PropertyService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkCode(url.substring(url.lastIndexOf('/') + 1));
  }

  checkCode(code) {
    if (this.propertyService.propertyCodeExists(code)) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/properties']);

    return false;
  }

}
