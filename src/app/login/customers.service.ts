import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  public createCustomer(customer: any): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/customer_register`, { ...customer, ...this.userAgentDetails() })
      .pipe(
        HttpHelpers.retry(),
        catchError((err: HttpErrorResponse) => {
          switch (err.status) {
            case 400:
              return throwError(
                { message: 'The registration information has some problems', status: err.status, errors: err.error.errors }
              );
            case 500:
              return throwError({ message: 'Problem registering, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem registering, please check network and try again', status: err.status });
          }
        }),
        map((newCustomer: any) => {
          return { message: 'Successfully registered', newCustomer };
        })
      );
  }

  public loginCustomer(credentials: any): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/customer_login`, credentials)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 401:
              return throwError({ message: 'Email or password is incorrect', status: err.status });
            case 500:
              return throwError({ message: 'Problem logging in, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem logging in, please check network and try again', status: err.status });
          }
        }),
        map((customer: any) => {
          return { message: 'Successfully logged in', customer };
        })
      );
  }

  public forgotCustomerPassword(email: string): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/password/reset-request`, { email })
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 403:
              return throwError({ message: 'No account with this email found', status: err.status });
            case 429:
              return throwError({ message: 'Too many password reset attempts, please wait 2hrs before retrying', status: err.status });
            case 500:
              return throwError({ message: 'Problem retrieving your account, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem retrieving your account, please check network and try again', status: err.status });
          }
        }),
        map(() => {
          return { message: 'Success! Check your mail for next steps' };
        })
      );
  }

  private userAgentDetails(): any {
    return {
      screen_width: screen.width,
      screen_height: screen.height,
      screen_availWidth: screen.availWidth,
      screen_availHeight: screen.availHeight,
      color_depth: screen.colorDepth,
      pixel_depth: screen.pixelDepth,
      user_agent: navigator.userAgent,
      referrer_page: document.referrer,
      lang: navigator.language,
      os: navigator.platform
    };
  }

}
