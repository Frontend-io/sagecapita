import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtManagerService {
  private sesId = '_7_nkj8jb_';
  private helper = new JwtHelperService();

  constructor() {
  }

  public getJWTJWT(): any {
    try {
      return JSON.parse(sessionStorage.getItem(this.sesId)) || {};
    } catch (e) {
      return {};
    }
  }

  public getJWT(): string {
    return this.getJWTJWT().jwt;
  }

  public getUser(): string {
    return this.getJWTJWT().user;
  }

  public set(jwt: any): void {
    sessionStorage.setItem(this.sesId, JSON.stringify(jwt));
  }

  public check(): boolean {
    const jwt = this.getJWT();

    if (jwt) {
      return this.helper.isTokenExpired(JSON.stringify(jwt));
    } else {
      return true;
    }

  }

  public decode(): any {
    return this.helper.decodeToken(JSON.stringify(this.getJWT()));
  }

  public clear(): void {
    sessionStorage.removeItem(this.sesId);
  }

}
