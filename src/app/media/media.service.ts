import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';
import { dateToLocal } from '../shared/dateToLocal';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  public getNewss(params: any): Observable<any> {
    const httpParams = new HttpParams({ fromObject: params });

    return this.http.get(`${HttpHelpers.apiBaseUrl}/news`, { params: httpParams })
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'News not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting news, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem getting news, please check network and try again', status: err.status });
          }
        }),
        map(({ newss }: any) => {
          newss['data'] = newss['data'].map((news: any) => {
            news['updated_at'] = news['updated_at'] && dateToLocal(news['updated_at']);

            return news;
          });

          return newss;
        })
      );
  }

  public getTotalNews(): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/total_news`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'News not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting news, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem getting news, please check network and try again', status: err.status });
          }
        })
      );
  }

  public getNewsYears(): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/news_years`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'No news year found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting news years, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem getting news years, please check network and try again', status: err.status });
          }
        }),
        map(({ news_years }: any) => {
          return news_years;
        })
      );
  }

}
