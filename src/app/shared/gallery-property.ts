export interface GalleryProperty {
    code: string;
    photo: string;
    main_title: string;
    created_at: string;
    views: number;
    suburb: string;
    city: string;
    state: string;
    is_exclusive: boolean;
    price?: number;
    price_lower_range?: number;
    price_upper_range?: number;
}
