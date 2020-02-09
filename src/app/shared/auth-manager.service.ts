import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtManagerService } from './jwt-manager.service';
import { AuthService } from './auth.service';

import { AuthDialogService } from './auth-dialog.service';

import { loggedInUser, loggedOutUser, userIsLoggedIn } from './userIsLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {
  private redirectUrl: string;

  constructor(
    private jwtManagerService: JwtManagerService,
    private authService: AuthService,
    private authDialogService: AuthDialogService) {
  }

  public auth(email: string, password: string): Observable<any> {
    return this.authService.auth(email, password)
      .pipe(
        map(({ message, jwt }) => {
          this.jwtManagerService.set(jwt);

          loggedInUser();

          return { message };
        })
      );
  }

  // public checkAuth(): Promise<any> {
  //   // try {
  //   if (this.jwtManagerService.check()) {
  //     // return this.authDialogService
  //     //   .open()
  //     //   .then((jwt) => this.jwtManagerService.set(jwt));

  //     return Promise.reject();
  //   } else {
  //     return Promise.resolve();
  //   }
  //   // } catch (e) {
  //   //   return this.authDialogService
  //   //     .open()
  //   //     .then((jwt) => this.jwtManagerService.set(jwt));
  //   // }
  // }

  public checkAuth(force?: boolean): Promise<any> {
    if (this.jwtManagerService.check()) {
      if (force && userIsLoggedIn()) {
        return this.authDialogService
          .open()
          .then((jwt) => {
            this.jwtManagerService.set(jwt);
          });
      }

      return Promise.reject();
    } else {
      return Promise.resolve();
    }
  }

  public getAuthTokens(): Promise<any> {
    return this.checkAuth().then((jwt) => jwt || this.jwtManagerService.getJWT());
  }

  public getLoggedInUser(): Promise<any> {
    return this.checkAuth().then((jwt) => jwt || this.jwtManagerService.getUser());
  }

  public getAuthorization(): Promise<string> {
    return this.getAuthTokens().then((jwt) => {
      const JWT = jwt || this.jwtManagerService.getJWT();

      return `${JWT.token_type} ${JWT.token}`;
    });
  }

  public logout(): void {
    loggedOutUser();

    return this.jwtManagerService.clear();
  }

  public setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  public getRedirectUrl(): string {
    return this.redirectUrl;
  }

  public resetRedirectUrl(): void {
    this.redirectUrl = undefined;
  }
}
