import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

import { PropertyGroup } from './property-group';

import { CONFIG } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class PropertyGroupService {
  // propertyGroups = {
  //   state: [
  //     {
  //       name: 'abuja',
  //       photo: 'property-group.jpg',
  //       count: 21
  //     }, {
  //       name: 'lagos',
  //       photo: 'property-group.jpg',
  //       count: 19
  //     }, {
  //       name: 'rivers',
  //       photo: 'property-group.jpg',
  //       count: 25
  //     }, {
  //       name: 'ogun',
  //       photo: 'property-group.jpg',
  //       count: 8
  //     }, {
  //       name: 'edo',
  //       photo: 'property-group.jpg',
  //       count: 21
  //     }, {
  //       name: 'cross river',
  //       photo: 'property-group.jpg',
  //       count: 21
  //     }
  //   ],
  //   city: [
  //     {
  //       name: 'lekki',
  //       photo: 'property-group.jpg',
  //       count: 91
  //     }, {
  //       name: 'festac',
  //       photo: 'property-group.jpg',
  //       count: 21
  //     }, {
  //       name: 'ojota',
  //       photo: 'property-group.jpg',
  //       count: 20
  //     }, {
  //       name: 'yaba',
  //       photo: 'property-group.jpg',
  //       count: 18
  //     }, {
  //       name: 'iyana ipaja',
  //       photo: 'property-group.jpg',
  //       count: 21
  //     }, {
  //       name: 'surulere',
  //       photo: 'property-group.jpg',
  //       count: 17
  //     }
  //   ],
  //   type: [
  //     {
  //       name: '5 bedroom duplex',
  //       photo: 'property-group.jpg',
  //       count: 15
  //     }, {
  //       name: '3 bedroom flat',
  //       photo: 'property-group.jpg',
  //       count: 11
  //     }, {
  //       name: 'office spaces',
  //       photo: 'property-group.jpg',
  //       count: 17
  //     }, {
  //       name: 'self contain - studio',
  //       photo: 'property-group.jpg',
  //       count: 19
  //     }, {
  //       name: 'landed property',
  //       photo: 'property-group.jpg',
  //       count: 15
  //     }, {
  //       name: 'semi detached duplex',
  //       photo: 'property-group.jpg',
  //       count: 26
  //     }
  //   ]
  // };

  constructor(private http: HttpClient) { }

  public getPropertiesGroup(group: string = 'top_cities'): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/${group}`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'Property group not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting property group, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem getting property group, please check network and try again', status: err.status });
          }
        }),
        map(({ property_groups }: any): any => {
          property_groups['data']
            = property_groups['data']
              .map(({ name, photo, count }) =>
                ({ name, photo: `${CONFIG.cloudinary.baseUrl}/${photo}`, count }));

          return property_groups;
        })
      );
  }

  public getPropertyGroupsList(): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/get_property_groups_list`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'No property group nwasot found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting property groups list, please try again', status: err.status });
            case 0:
            default:
              return throwError({
                message: 'Problem getting property groups list, please check network and try again', status: err.status });
          }
        }),
        map(({ property_groups_list }: any): any => property_groups_list)
      );


    // const propertyGroups = this.propertyGroups;
    // const propertyGroupsNames = Object.keys(propertyGroups);
    // const propertyGroupsList = {};

    // propertyGroupsNames.forEach((group) => {
    //   propertyGroupsList[group] = propertyGroups[group].map(({ name }) => name);
    // });

    // return propertyGroupsList;
  }
}
