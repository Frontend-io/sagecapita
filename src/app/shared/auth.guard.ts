import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthManagerService } from '../shared/auth-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerGuard implements CanActivate, CanActivateChild {
  constructor(private authManagerService: AuthManagerService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authManagerService.checkAuth().then(() => {
        resolve(true);
      }).catch(() => {
        // Store the attempted URL for redirecting
        this.authManagerService.setRedirectUrl(url);

        // Navigate to the login page with extras
        this.router.navigate(['/login']);

        reject(false);
      });
    });
  }
}
