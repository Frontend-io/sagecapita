import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from './http-helpers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public auth(email: string, password: string): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/customer_login`, { email, password })
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 401:
              return throwError({ message: 'Email/Password combination is incorrect', status: err.status });
            case 500:
              return throwError({ message: 'Problem logging in, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem logging in, please check network and try again', status: err.status });
          }
        }),
        map((jwt) => {
          return { message: 'Successfully logged in', jwt };
        })
      );
  }

}
