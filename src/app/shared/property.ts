// import { Price } from '../shared/price';
// import { Text } from '../shared/text';
// import { Currencies } from '../shared/currencies.enum';

export interface Property {
    code: string;
    photo: string;
    photos: Array<string>;
    video?: string;
    main_title: string;
    side_title: string;
    heading_title: string;
    description_text: string;
    state: string;
    city: string;
    suburb?: string;
    type: string;
    interior_surface: number;
    exterior_surface: number;
    features: Array<string>;
    is_exclusive: boolean;
    price?: number;
    price_lower_range?: number;
    price_upper_range?: number;
}

// export interface Property {
//     code: string;
//     photo: string;
//     photos: Array<string>;
//     video: string;
//     main_title: Text;
//     side_title: Text;
//     heading_title: Text;
//     description_text: Text;
//     state: string;
//     city: string;
//     suburb?: string;
//     type: Text;
//     interior_surface: number;
//     exterior_surface: number;
//     features: Array<Text>;
//     is_exclusive: boolean;
//     currency: Currencies;
//     price: Price;
//     price_lower_range?: Price;
//     price_upper_range?: Price;
// }

// const property: Property = {
//     code: '3',
//     photo: 'image_1.jpg',
//     photos: [
//         'home-carousel/slide_1.jpg',
//         'home-carousel/slide_2.jpg',
//         'home-carousel/slide_3.jpg',
//         'home-carousel/slide_21.jpg',
//         'home-carousel/slide_22.jpg',
//         'home-carousel/slide_3.jpg'
//     ],
//     video: 'https://cdn-maps.lionard.com/Allegati/LIONARD_RIF5118_720.mp4',
//     main_title: { EN: 'Exclusive villa surrounded by a pine forest near', FR: '' },
//     state: 'abuja',
//     city: 'maitama',
//     suburb: 'ministers hill',
//     type: { EN: '5 - Bedrooms fully detached with servant quarters', FR: '' },
//     interior_surface: 160,
//     exterior_surface: 5000,
//     features: [
//         { EN: '2 - Exquisive large living rooms', FR: '' },
//         { EN: '1 Ante room', FR: '' },
//         { EN: '1 Guest toilet', FR: '' },
//         { EN: '1 Private family lounge', FR: '' },
//         { EN: '1 Study room', FR: '' },
//         { EN: '1 Lavish expansive kitchen with, island, store room and back door exit', FR: '' },
//         {
//             EN: `The house stands on 2 floors, all bedrooms en suite, first class wardrobes,
//         masterfully crafted masters bedroom with fine quality Brazilian tiles.
//         Expansive  balcony with seat out. Great finishing, wonderful vicinity and easily accessible.`, FR: ''
//         }
//     ],
//     is_exclusive: false,
//     is_on_application: true,
//     currency: Currencies.NGN,
//     price: { GPB: 2000, NGN: 10000, USD: 2500 },
//     price_lower_range: { GPB: 2000, NGN: 10000, USD: 2500 },
//     price_upper_range: { GPB: 2000, NGN: 10000, USD: 2500 },
//     side_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached', FR: '' },
//     heading_title: { EN: 'Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters', FR: '' },
//     description_text: {
//         EN: `Newly Built & Lavishly Finished Brand New 5 - Bedrooms fully detached with servant quarters
//     within the serenity and ambiance of Ministers Hill, just 3 minutes drive to maitama, Abuja.`, FR: ''
//     }
// };
