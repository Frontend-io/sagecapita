import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';

import { Property } from './property';
import { Currencies } from './currencies.enum';

import { CurrencyService } from './currency.service';
import { LanguageService } from './language.service';

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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: 'Omelette du fromage' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: 'Omelette du fromage' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: 'Omelette du fromage' },
        { EN: '1 Ante room', FR: 'Omelette du fromage' },
        { EN: '1 Guest toilet', FR: 'Omelette du fromage' },
        { EN: '1 Private family lounge', FR: 'Omelette du fromage' },
        { EN: '1 Study room', FR: 'Omelette du fromage' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: 'Omelette du fromage' },
        {
          EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: 'Omelette du fromage'
        }
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: Currencies.NGN,
      price: { GBP: 5000000, NGN: 50000000, USD: 5005000 },
      price_lower_range: null,
      price_upper_range: null,
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: 'Omelette du fromage' },
      heading_title: {
        EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
        FR: 'Omelette du fromage'
      },
      description_text: {
        EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: 'Omelette du fromage'
      }
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: 'Omelette du fromage' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: 'Omelette du fromage' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: 'Omelette du fromage' },
        { EN: '1 Ante room', FR: 'Omelette du fromage' },
        { EN: '1 Guest toilet', FR: 'Omelette du fromage' },
        { EN: '1 Private family lounge', FR: 'Omelette du fromage' },
        { EN: '1 Study room', FR: 'Omelette du fromage' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: 'Omelette du fromage' },
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: Currencies.NGN,
      price: null,
      price_lower_range: { GBP: 2000000, NGN: 20000000, USD: 2000200 },
      price_upper_range: { GBP: 5000000, NGN: 50000000, USD: 5005000 },
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: 'Omelette du fromage' },
      heading_title: {
        EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
        FR: 'Omelette du fromage'
      },
      description_text: {
        EN: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
    within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`, FR: 'Omelette du fromage'
      }
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: 'Omelette du fromage' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: 'Omelette du fromage' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: 'Omelette du fromage' },
        { EN: '1 Ante room', FR: 'Omelette du fromage' },
        { EN: '1 Guest toilet', FR: 'Omelette du fromage' },
        { EN: '1 Private family lounge', FR: 'Omelette du fromage' },
        { EN: '1 Study room', FR: 'Omelette du fromage' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: 'Omelette du fromage' },
       ],
      is_exclusive: false,
      is_on_application: true,
      currency: null,
      price: null,
      price_lower_range: null,
      price_upper_range: null,
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: 'Omelette du fromage' },
      heading_title: {
        EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
        FR: 'Omelette du fromage'
      },
      description_text: {
        EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: 'Omelette du fromage'
      }
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: 'Omelette du fromage' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: 'Omelette du fromage' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: 'Omelette du fromage' },
        { EN: '1 Ante room', FR: 'Omelette du fromage' },
        { EN: '1 Guest toilet', FR: 'Omelette du fromage' },
        { EN: '1 Private family lounge', FR: 'Omelette du fromage' },
        { EN: '1 Study room', FR: 'Omelette du fromage' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: 'Omelette du fromage' },
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: Currencies.NGN,
      price: { GBP: 5000000, NGN: 50000000, USD: 5005000 },
      price_lower_range: null,
      price_upper_range: null,
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: 'Omelette du fromage' },
      heading_title: {
        EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters',
        FR: 'Omelette du fromage'
      },
      description_text: {
        EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: 'Omelette du fromage'
      }
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

  searchProperties(criteria: any = { state: 'abuja', city: 'maitama', type: null, size: null, price: null }): Property[] {
    return this.properties;
  }

  propertyCodeExists(code: string): boolean {
    return this.properties.findIndex(property => property.code === code) !== -1;
  }

  getProperty(code: string): Property {
    return this.properties.find(property => property.code === code);
  }

  getTopSelections(): Property[] {
    return this.properties.slice(1, 4);
  }

  // only logged in users should see this
  getExclusiveProperties(): Property[] {
    return this.properties;
  }

  getLatestAcquisitions(): Property[] {
    return this.properties;
  }

  getViewedProperties(): Property[] {
    return this.properties;
  }

  getHomeGalleryProperties(): Property[] {
    return this.properties;
  }

  getHomeThumbnailProperties(): Property[] {
    return this.properties;
  }

  getMostSeen(): Property[] {
    return this.properties.slice(1, 4);
  }

  getRecentlyUploaded(): Property[] {
    return this.properties.slice(1, 4);
  }

  getSoldProperties(): Property[] {
    return this.properties.slice(1, 4);
  }

  getMainGalleryProperty(): Property {
    return this.properties[0];
  }
}
