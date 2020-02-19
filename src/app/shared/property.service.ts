import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHelpers } from '../shared/http-helpers';

import { Subject } from 'rxjs';

import { Property } from './property';
import { GalleryProperty } from './gallery-property';
import { Currencies } from './currencies.enum';

import { CurrencyService } from './currency.service';
import { LanguageService } from './language.service';

import { CONFIG } from '../shared/config';

import { dateToLocal } from './dateToLocal';

import TimeAgo from 'javascript-time-ago';

// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en';

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en);

const timeAgo = new TimeAgo('en-US');

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
      is_exclusive: true,
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
        main_title: property.main_title,
        type: property.type,
        features: property.features, // .map((feature) => feature[lang]),
        // currency: Currencies.NGN,
        price: property.price,
        price_lower_range: property.price_lower_range,
        price_upper_range: property.price_upper_range,
        side_title: property.side_title,
        heading_title: property.heading_title,
        description_text: property.description_text
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

  private getPropertyGalleryThumbnails(endPoint: string): Observable<GalleryProperty[]> {
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
          properties['data'].map((property: GalleryProperty) => {
            property['photo'] = `${CONFIG.cloudinary.baseMidThumbUrl}/${property['photo']}`;
            property['created_at'] = timeAgo.format(new Date(dateToLocal(property['created_at'])));

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
        })
      );
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
          property['photo'] = `${CONFIG.cloudinary.baseXLargeThumbUrl}/${property['photo']}`;
          property['photos'] = JSON.parse(property['photos']).map((photo: string) => `${CONFIG.cloudinary.baseSmallThumbUrl}/${photo}`);
          property['video'] = `${CONFIG.cloudinary.baseVideoUrl}/${property['video']}`;

          return property;
        })
      );
  }

  public propertyCount(): Observable<any> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/property_count`)
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
        }), map(({properties_count}) => properties_count)
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

  public getMostSeen(): Observable<any> {
    return this.getPropertyGalleryThumbnails('most_seen');
  }

  public getRecentlyUploaded(): Observable<any> {
    return this.getPropertyGalleryThumbnails('recently_uploaded');
  }

  public getSoldProperties(): Observable<any> {
    return this.getPropertyGalleryThumbnails('sold_properties');
  }

  public getHomeCarouselProperties(): Observable<Property[]> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/home_carousel`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'Home carousel properties not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting home carousel properties, please try again', status: err.status });
            case 0:
            default:
              return throwError({
                message: 'Problem getting home carousel properties, please check network and try again', status: err.status
              });
          }
        }),
        map(({ home_carousels }: any) => {
          home_carousels.map((home_carousel: GalleryProperty) => {
            home_carousel['photo'] = `${CONFIG.cloudinary.baseXLargeThumbUrl}/${home_carousel['photo']}`;

            return home_carousel;
          });

          return home_carousels;
        })
      );
  }

  public getMainGalleryProperty(): Observable<Property> {
    return this.http.get(`${HttpHelpers.apiBaseUrl}/main_gallery_photo`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err) => {
          switch (err.status) {
            case 404:
              return throwError({ message: 'Main gallery photo property not found', status: err.status });
            case 500:
              return throwError({ message: 'Problem getting main gallery photo property, please try again', status: err.status });
            case 0:
            default:
              return throwError({
                message: 'Problem getting main gallery photo property, please check network and try again', status: err.status
              });
          }
        }),
        map(({ main_gallery_photo }: any) => {
          main_gallery_photo['photo'] = `${CONFIG.cloudinary.baseXLargeThumbUrl}/${main_gallery_photo['photo']}`;
          main_gallery_photo['video'] = `${CONFIG.cloudinary.baseVideoUrl}/${main_gallery_photo['video']}`;

          return main_gallery_photo;
        })
      );
  }

  public favorite(propertyCode: string/*, customerId: number*/): Observable<any> { // , customer_id: customerId
    return this.http.post(`${HttpHelpers.apiBaseUrl}/favorites`, { property_code: propertyCode })
      .pipe(
        HttpHelpers.retry(),
        catchError((err: HttpErrorResponse) => {
          switch (err.status) {
            case 401:
              return throwError({ message: 'Kindly login to take this action', status: err.status });
            case 500:
              return throwError({ message: 'Problem processing your request, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem processing your request, please check network and try again', status: err.status });
          }
        })
      );
  }

  public unfavorite(propertyCode: string): Observable<any> {
    return this.http.delete(`${HttpHelpers.apiBaseUrl}/favorites/${propertyCode}`)
      .pipe(
        HttpHelpers.retry(),
        catchError((err: HttpErrorResponse) => {
          switch (err.status) {
            case 401:
              return throwError({ message: 'Kindly login to take this action', status: err.status });
            case 404:
              return throwError({ message: 'Favorite not found!', status: err.status });
            case 500:
              return throwError({ message: 'Problem processing your request, please try again', status: err.status });
            case 0:
            default:
              return throwError({ message: 'Problem processing your request, please check network and try again', status: err.status });
          }
        })
      );
  }
}
