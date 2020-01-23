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

  checkCode(code): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.propertyService.propertyCodeExists(code)
        .subscribe((res: any) => {
          resolve(true);
        }, (err: any) => {
          reject(false);

          // Navigate to the login page with extras
          this.router.navigate(['/properties']);
        });
    })
  }

}
