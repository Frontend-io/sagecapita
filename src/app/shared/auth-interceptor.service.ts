import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthManagerService } from './auth-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authManagerService: AuthManagerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.substring(req.url.lastIndexOf('/')) === '/login') {
      return next.handle(req);
    }

    return from(this.authManagerService.getAuthorization())
      .pipe(
        switchMap((authToken) => {
          // do the changes here
          const authReq = req.clone({ setHeaders: { Authorization: authToken } });

          return next.handle(authReq);
        }),
        catchError((e) => {
          // return throwError(new HttpErrorResponse({ status: 401 }));
          return next.handle(req);
        })
      );
  }
}
