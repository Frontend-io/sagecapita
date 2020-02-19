import { environment } from '../../environments/environment';

export const CONFIG = {
    cloudinary: {
        cloud_name: environment.cloudinary_cloudname,
        get baseSmallThumbUrl() {
            return `${this.baseUrl}/c_limit,h_70,w_125`;
        },
        get baseMidThumbUrl() {
            return `${this.baseUrl}/c_limit,h_182,w_265`;
        },
        get baseLargeThumbUrl() {
            return `${this.baseUrl}/c_limit,h_310,w_580`;
        },
        get baseXLargeThumbUrl() {
            return `${this.baseUrl}/c_limit,h_927,w_1349`;
        },
        get baseThumbUrl() {
            return `${this.baseUrl}/c_limit,h_330,w_480`;
        },
        get baseVideoUrl() {
            return `${this.baseUrl}/video/upload/f_auto,q_auto`;
        },
        get baseUrl() {
            return `https://res.cloudinary.com/${this.cloud_name}`;
        }
    }
};
