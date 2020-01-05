import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Property } from './property';
import { Currencies } from './currencies.enum';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  properties: Array<Property> = [
    {
      code: '1',
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: '' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: '' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: '' },
        { EN: '1 Ante room', FR: '' },
        { EN: '1 Guest toilet', FR: '' },
        { EN: '1 Private family lounge', FR: '' },
        { EN: '1 Study room', FR: '' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: '' },
        {
            EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: ''
        }
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: Currencies.NGN,
      price: { GPB: 5000000, NGN: 50000000, USD: 5005000},
      price_lower_range: null,
      price_upper_range: null,
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: '' },
      heading_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters', FR: '' },
      description_text: {
        EN: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
    within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`, FR: ''
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: '' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: '' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: '' },
        { EN: '1 Ante room', FR: '' },
        { EN: '1 Guest toilet', FR: '' },
        { EN: '1 Private family lounge', FR: '' },
        { EN: '1 Study room', FR: '' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: '' },
        {
            EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: ''
        }
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: Currencies.NGN,
      price: null,
      price_lower_range: { GPB: 2000000, NGN: 20000000, USD: 2000200},
      price_upper_range: { GPB: 5000000, NGN: 50000000, USD: 5005000},
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: '' },
      heading_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters', FR: '' },
      description_text: {
        EN: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
    within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`, FR: ''
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: '' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: '' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: '' },
        { EN: '1 Ante room', FR: '' },
        { EN: '1 Guest toilet', FR: '' },
        { EN: '1 Private family lounge', FR: '' },
        { EN: '1 Study room', FR: '' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: '' },
        {
            EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: ''
        }
      ],
      is_exclusive: false,
      is_on_application: true,
      currency: null,
      price: null,
      price_lower_range: null,
      price_upper_range: null,
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: '' },
      heading_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters', FR: '' },
      description_text: {
        EN: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
    within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`, FR: ''
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
      main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: '' },
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: '' },
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        { EN: '2 - Exquisive large living rooms', FR: '' },
        { EN: '1 Ante room', FR: '' },
        { EN: '1 Guest toilet', FR: '' },
        { EN: '1 Private family lounge', FR: '' },
        { EN: '1 Study room', FR: '' },
        { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: '' },
        {
            EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: ''
        }
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: Currencies.NGN,
      price: { GPB: 5000000, NGN: 50000000, USD: 5005000},
      price_lower_range: null,
      price_upper_range: null,
      side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: '' },
      heading_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters', FR: '' },
      description_text: {
        EN: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
    within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`, FR: ''
    }
    }
  ];

  constructor(private http: HttpClient) { }

  searchProperties(criteria: any = { state: 'abuja', city: 'maitama', type: null, size: null, price: null }): Array<Property> {
    return this.properties;
  }

  propertyCodeExists(code: string) {
    return this.properties.findIndex(property => property.code === code) !== -1;
  }

  getProperty(code: string): Property {
    return this.properties.find(property => property.code === code);
  }

  getTopSelections(): Array<Property> {
    return this.properties.slice(0, 3);
  }

  // only logged in users should see this
  getExclusiveProperties(): Array<Property> {
    return this.properties;
  }

  getLatestAcquisitions(): Array<Property> {
    return this.properties;
  }

  getViewedProperties(): Array<Property> {
    return this.properties;
  }

  getHomeGalleryProperties(): Array<Property> {
    return this.properties;
  }

  getHomeThumbnailProperties(): Array<Property> {
    return this.properties;
  }
}
