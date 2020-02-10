export const CONFIG = {
    cloudinary: {
        cloud_name: 'bustops',
        get baseSmallThumbUrl() {
            return `${this.baseUrl}/c_crop,h_70,w_125`;
        },
        get baseMidThumbUrl() {
            return `${this.baseUrl}/c_crop,h_182,w_265`;
        },
        get baseLargeThumbUrl() {
            return `${this.baseUrl}/c_crop,h_310,w_580`;
        },
        get baseThumbUrl() {
            return `${this.baseUrl}/c_crop,h_330,w_480`;
        },
        get baseUrl() {
            return `https://res.cloudinary.com/${this.cloud_name}`;
        }
    }
};
