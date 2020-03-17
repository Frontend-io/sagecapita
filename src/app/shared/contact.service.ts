import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public createContact(contact: any): Observable<any> {
    return this.http.post(`${HttpHelpers.apiBaseUrl}/lead`, {...contact, ...this.userAgentDetails()})
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 400:
              return throwError({ message: 'Contact information is incomplete or invalid', status: err.status });
            case 500:
              return throwError({ message: 'Problem adding contact, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem adding contact, please check network and try again', status: err.status });
          }
        }),
        map((newContact: any) => {
          return { message: 'Thank you for your request. A member of our team will contact you shortly.', newContact };
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
