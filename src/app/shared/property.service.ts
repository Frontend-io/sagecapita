import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

import { Subject } from 'rxjs';

import { Property } from './property';
import { Currencies } from './currencies.enum';

import { CurrencyService } from './currency.service';
import { LanguageService } from './language.service';

import { CONFIG } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // after fetch from server, store in originalProperties (overwrite)
  private originalProperties: Property[] = [
    {
      code: '1',
      photo: 'image_3.jpg',
      photos: [
        'home-carousel/slide_1.jpg',
        'home-carousel/slide_2.jpg',
        'home-carousel/slide_3.jpg',
        'home-carousel/slide_21.jpg',
        'home-carousel/slide_22.jpg',
        'home-carousel/slide_3.jpg'
      ],
      video: 'https://cdn-maps.lionard.com/Allegati/LIONARD_RIF5118_720.mp4',
      main_title: 'Exclusive villa surrounded by a pine forest near',
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: '5 - Bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - Exquisive large living rooms',
        '1 Ante room',
        '1 Guest toilet',
        '1 Private family lounge',
        '1 Study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
        `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
      ],
      is_exclusive: false,
      price: 5000000,
      price_lower_range: null,
      price_upper_range: null,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
      description_text: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
    }, {
      code: '2',
      photo: 'image_1.jpg',
      photos: [
        'home-carousel/slide_1.jpg',
        'home-carousel/slide_2.jpg',
        'home-carousel/slide_3.jpg',
        'home-carousel/slide_21.jpg',
        'home-carousel/slide_22.jpg',
        'home-carousel/slide_3.jpg'
      ],
      video: null,
      main_title: 'Exclusive villa surrounded by a pine forest near',
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: '5 - Bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - Exquisive large living rooms',
        '1 Ante room',
        '1 Guest toilet',
        '1 Private family lounge',
        '1 Study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
      ],
      is_exclusive: false,
      price: null,
      price_lower_range: 2000000,
      price_upper_range: 5000000,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
      description_text: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
    within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`
    }, {
      code: '3',
      photo: 'image_1.jpg',
      photos: [
        'home-carousel/slide_1.jpg',
        'home-carousel/slide_2.jpg',
        'home-carousel/slide_3.jpg',
        'home-carousel/slide_21.jpg',
        'home-carousel/slide_22.jpg',
        'home-carousel/slide_3.jpg'
      ],
      video: 'https://cdn-maps.lionard.com/Allegati/LIONARD_RIF5118_720.mp4',
      main_title: 'Exclusive villa surrounded by a pine forest near',
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: '5 - Bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - Exquisive large living rooms',
        '1 Ante room',
        '1 Guest toilet',
        '1 Private family lounge',
        '1 Study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
      ],
      is_exclusive: false,
      price: null,
      price_lower_range: null,
      price_upper_range: null,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
      description_text: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
    }, {
      code: '4',
      photo: 'image_1.jpg',
      photos: [
        'home-carousel/slide_1.jpg',
        'home-carousel/slide_2.jpg',
        'home-carousel/slide_3.jpg',
        'home-carousel/slide_21.jpg',
        'home-carousel/slide_22.jpg',
        'home-carousel/slide_3.jpg'
      ],
      video: 'https://cdn-maps.lionard.com/Allegati/LIONARD_RIF5118_720.mp4',
      main_title: 'Exclusive villa surrounded by a pine forest near',
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: '5 - Bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - Exquisive large living rooms',
        '1 Ante room',
        '1 Guest toilet',
        '1 Private family lounge',
        '1 Study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
      ],
      is_exclusive: false,
      price: 5000000,
      price_lower_range: null,
      price_upper_range: null,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
      description_text: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
    }
  ];
  // then mapCurrencyAndLanguage and store in properties cache variable (overwrite)
  private properties: Property[];

  private subject = new Subject<void>();

  public subject$ = this.subject.asObservable();

  constructor(private http: HttpClient, private currencyService: CurrencyService, private languageService: LanguageService) {
    this.properties = this.mapCurrencyAndLanguage(this.originalProperties);

    this.currencyService.subject$.subscribe(
      currency => {
        this.properties = this.mapCurrencyAndLanguage(this.originalProperties, currency[1]);
        this.subject.next();
      });

    this.languageService.subject$.subscribe(
      lang => {
        this.properties = this.mapCurrencyAndLanguage(this.originalProperties, undefined, lang);
        this.subject.next();
      });
  }

  private mapCurrencyAndLanguage(properties: Property[],
    currency = this.currencyService.getCurrency()[1],
    lang = this.languageService.getLang()): Property[] {

    return properties.map((property) => {
      return {
        ...property,
        main_title: property.main_title[lang],
        type: property.type[lang],
        features: property.features.map((feature) => feature[lang]),
        currency: Currencies[currency],
        price: property.price && property.price[currency],
        price_lower_range: property.price_lower_range && property.price_lower_range[currency],
        price_upper_range: property.price_upper_range && property.price_upper_range[currency],
        side_title: property.side_title[lang],
        heading_title: property.heading_title[lang],
        description_text: property.description_text[lang]
      };
    });
  }

  private getPropertyThumbnails(endPoint): Observable<Property[]> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/${endPoint}`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'Exclusive properties not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem properties, please try again', status: err.status });
            case 0:
            default:
              return throwError({
                message: 'Problem properties, please check network and try again', status: err.status
              });
          }
        }),
        map(({ properties }: any) => {
          properties['data'].map((property: Property) => {
            property['photo'] = `${CONFIG.cloudinary.baseThumbUrl}/${property['photo']}`;

            return property;
          });

          return properties;
        })
      );
  }

  public searchProperties(criteria: any = { state: 'abuja', city: 'maitama', type: null, size: null, price: null }): Property[] {
    return this.properties;
  }

  public propertyCodeExists(code: string): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/property_exists/${code}`)
      .pipe(HttpHelpers.retry());
  }

  public getProperty(code: string): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/property/${code}`)
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
        map(({ property }: any) => {
          property['features'] = JSON.parse(property['features']);
          property['photo'] = `${CONFIG.cloudinary.baseUrl}/${property['photo']}`;
          property['photos'] = JSON.parse(property['photos']).map((photo: string) => `${CONFIG.cloudinary.baseUrl}/${photo}`);

          return property;
        })
      );
  }

  public getTopSelections(): Observable<Property[]> {
    return this.getPropertyThumbnails('top_selections');
  }

  // only logged in users should see this
  public getExclusiveProperties(): Observable<Property[]> {
    return this.getPropertyThumbnails('exclusive_properties');
  }

  public getLatestAcquisitions(): Observable<Property[]> {
    return this.getPropertyThumbnails('latest_acquisitions');
  }

  public getViewedProperties(): Observable<Property[]> {
    return this.getPropertyThumbnails('viewed_properties');
  }

  public getHomeGalleryProperties(): Property[] {
    return this.properties;
  }

  public getHomeThumbnailProperties(): Property[] {
    return this.properties;
  }

  public getMostSeen(): Property[] {
    return this.properties.slice(1, 4);
  }

  public getRecentlyUploaded(): Property[] {
    return this.properties.slice(1, 4);
  }

  public getSoldProperties(): Property[] {
    return this.properties.slice(1, 4);
  }

  public getMainGalleryProperty(): Property {
    return this.properties[0];
  }
}
