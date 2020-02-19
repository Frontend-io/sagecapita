import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';
import { CONFIG } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  public getFavorites(params: any): Observable<any> {
    const httpParams = new HttpParams({ fromObject: params });

    return this.http.get(`${HttpHelpers.apiBaseUrl}/favorite_properties`, { params: httpParams })
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
        map(({ properties }: any) => {
          properties['data'] = properties['data'].map((property: any) => {
            property['photo'] = `${CONFIG.cloudinary.baseLargeThumbUrl}/${property['photo']}`;
            property['video'] = `${CONFIG.cloudinary.baseVideoUrl}/${property['video']}`;

            return property;
          });

          return properties;
        })
      );
  }
}
