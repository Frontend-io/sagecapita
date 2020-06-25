import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { getQueryStringParams } from '../shared/getQueryStringParameters';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const queryParams = getQueryStringParams();

    return !!(queryParams['email'] && queryParams['token']);
  }
}
//localhost:4200/password_reset/?token=fdb982b2707f14b5e1a5d5bafdd373c7a80c995a4ed57a946c286367e7fea4fb&email=wogwugwu.zenith%40gmail.com