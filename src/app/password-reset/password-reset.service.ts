import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(private http: HttpClient) { }

  public passwordReset(credentials: any): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/password/reset`, credentials)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 410:
              return throwError({ message: 'The password reset link is incorrect, please that the link is free from typos', status: err.status });
            case 410:
              return throwError({ message: 'The password reset link has expired, please try reseting from the login page', status: err.status });
            case 500:
              return throwError({ message: 'Problem reseting password, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem reseting password, please check network and try again', status: err.status });
          }
        })
      );
  }
}
