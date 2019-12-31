export interface Property {
    code: string;
    photo: string;
    photos: Array<string>;
    video: string;
    main_title: string;
    state: string;
    city: string;
    suburb?: string;
    type: string;
    interior_surface: number;
    exterior_surface: number;
    features: Array<string>;
    is_exclusive: boolean;
    is_on_application: boolean;
    currency: string;
    price: number;
    price_lower_range?: number;
    price_upper_range?: number;
    side_title: string;
    heading_title: string;
    description_text: string;
}
