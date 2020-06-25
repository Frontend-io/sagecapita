import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private blogBaseUrl = /*https://blog.sagecapita.com/wp-json/wp/v2*/'https://mayrian.com/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  public getLastBlogPost(): Observable<any> {
    const httpParams = new HttpParams({ fromObject: { per_page: '1', order: 'desc', orderby: 'id', categories: '2' } });

    return this.http.get(`${this.blogBaseUrl}/posts`, { params: httpParams })
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'Property not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting property, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem getting property, please check network and try again', status: err.status });
          }
        }),
        map(([{ link, title, content, featured_media }]: any) => {

          return {
            link,
            title: title.rendered,
            content: content.rendered.substring(0, 700).replace(new RegExp('<\/?[^>]+(>|$)', 'g'), '') + '...',
            featured_media
          };
        })
      );
  }

  public getLastBlogPostPhoto(mediaID: string): Observable<any> {
    return this.http.get(`${this.blogBaseUrl}/media/${mediaID}`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'Property not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting property, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem getting property, please check network and try again', status: err.status });
          }
        }),
        map(({ media_details }: any) => media_details.sizes['full'/*'minimalblog-blog-thumb'*/].source_url)
      );
  }
}
