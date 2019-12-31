import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PropertyGroup } from './property-group';

@Injectable({
  providedIn: 'root'
})
export class PropertyGroupService {
  propertyGroups = {
    state: [
      {
        name: 'abuja',
        photo: 'property-group.jpg',
        count: 21
      }, {
        name: 'lagos',
        photo: 'property-group.jpg',
        count: 19
      }, {
        name: 'rivers',
        photo: 'property-group.jpg',
        count: 25
      }, {
        name: 'ogun',
        photo: 'property-group.jpg',
        count: 8
      }, {
        name: 'edo',
        photo: 'property-group.jpg',
        count: 21
      }, {
        name: 'cross river',
        photo: 'property-group.jpg',
        count: 21
      }
    ],
    city: [
      {
        name: 'lekki',
        photo: 'property-group.jpg',
        count: 91
      }, {
        name: 'festac',
        photo: 'property-group.jpg',
        count: 21
      }, {
        name: 'ojota',
        photo: 'property-group.jpg',
        count: 20
      }, {
        name: 'yaba',
        photo: 'property-group.jpg',
        count: 18
      }, {
        name: 'iyana ipaja',
        photo: 'property-group.jpg',
        count: 21
      }, {
        name: 'surulere',
        photo: 'property-group.jpg',
        count: 17
      }
    ],
    type: [
      {
        name: '5 bedroom duplex',
        photo: 'property-group.jpg',
        count: 15
      }, {
        name: '3 bedroom flat',
        photo: 'property-group.jpg',
        count: 11
      }, {
        name: 'office spaces',
        photo: 'property-group.jpg',
        count: 17
      }, {
        name: 'self contain - studio',
        photo: 'property-group.jpg',
        count: 19
      }, {
        name: 'landed property',
        photo: 'property-group.jpg',
        count: 15
      }, {
        name: 'semi detached duplex',
        photo: 'property-group.jpg',
        count: 26
      }
    ]
  };

  constructor(private http: HttpClient) { }

  getPropertiesGroup(group: string = 'city'): Array<PropertyGroup> {
    return this.propertyGroups[group];
  }
}
