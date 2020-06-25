import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthManagerService } from './auth-manager.service';
import { AuthCheck } from './auth-check';

@Injectable({ providedIn: 'root' })

export class CheckAuthResolver implements AuthCheck<any> {
  constructor(private authManagerService: AuthManagerService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.checkLogin(/*route.paramMap.get('id')*/);
  }

  checkLogin(/*url: string*/): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authManagerService.checkAuth(true)
        .then(() => resolve(true))
        .catch(() => {
          this.authManagerService.logout();

          resolve(false);
        });
    });
  }
}
