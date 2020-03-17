import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from './shared/http-helpers';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private favoriteRefreshSource = new Subject<void>();

  favoriteRefresh$ = this.favoriteRefreshSource.asObservable();

  constructor(private http: HttpClient) { }

  public favoriteRefreshed() {
    this.favoriteRefreshSource.next();
  }

  public submit(body: any): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/newsletter_signup`, body)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 400:
              return throwError({ message: 'Information is incomplete or invalid', status: err.status });
            case 500:
              return throwError({ message: 'Problem sending, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem sending, please check network and try again', status: err.status });
          }
        })
      );
  }

  public getFavoritesCount(): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/total_favorites_for_customer`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 500:
              return throwError({ message: 'Problem getting total favorites for customer, please try again', status: err.status });
            case 404:
              return throwError({ message: 'Favorites count for customer not found, please try again', status: err.status });
            case 0:
            default:
              return throwError({
                message: 'Problem getting total favorites for customer, please check network and try again',
                status: err.status
              });
          }
        }),
        map(({ count }) => {
          return count;
        })
      );
  }
}
