import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Property } from '../shared/property';

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
      main_title: 'Exclusive villa surrounded by a pine forest near',
      state: 'abuja',
      city: 'maitama',
      suburb: 'ministers hill',
      type: '5 - bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - exquisive large living rooms',
        '1 ante room',
        '1 guest toilet',
        '1 private family lounge',
        '1 study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
        `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: 'NGN',
      price: 5000000,
      price_lower_range: null,
      price_upper_range: null,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters',
      description_text: `Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters
      within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`
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
      type: '5 - bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - exquisive large living rooms',
        '1 ante room',
        '1 guest toilet',
        '1 private family lounge',
        '1 study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
        `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: 'NGN',
      price: null,
      price_lower_range: 2000000,
      price_upper_range: 5000000,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters',
      description_text: `Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters
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
      type: '5 - bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - exquisive large living rooms',
        '1 ante room',
        '1 guest toilet',
        '1 private family lounge',
        '1 study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
        `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
      ],
      is_exclusive: false,
      is_on_application: true,
      currency: null,
      price: null,
      price_lower_range: null,
      price_upper_range: null,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters',
      description_text: `Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters
      within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`
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
      type: '5 - bedrooms fully detached with servant quarters',
      interior_surface: 160,
      exterior_surface: 5000,
      features: [
        '2 - exquisive large living rooms',
        '1 ante room',
        '1 guest toilet',
        '1 private family lounge',
        '1 study room',
        '1 Lavish expansive kitchen with, island, store room and back door exit',
        `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
        masterfully crafted masters bedroom with fine quality Brazilian tiles.
        Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`
      ],
      is_exclusive: false,
      is_on_application: false,
      currency: 'NGN',
      price: 5000000,
      price_lower_range: null,
      price_upper_range: null,
      side_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached',
      heading_title: 'Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters',
      description_text: `Newly Built & Lavishly Finished Brand New 5 - bedrooms fully detached with servant quarters
      within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`
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

  groupProperties(group: string = 'top_selection'): Array<Property> {
    return this.properties;
  }

  getHomeGalleryProperties(): Array<Property> {
    return this.properties;
  }
}
