import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor(private http: HttpClient) { }

  public submit(fileToUpload: File, body: any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('cv', fileToUpload, fileToUpload.name);

    Object.keys(body).forEach((control) => formData.append(control, body[control]));

    return this.http.post(`${HttpHelpers.apiBaseUrl}/joinus`, formData, { headers: {} })
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 400:
              return throwError({ message: 'Candidate information is incomplete or invalid', status: err.status });
            case 500:
              return throwError({ message: 'Problem sending request, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem sending request, please check network and try again', status: err.status });
          }
        }));
  }
}
