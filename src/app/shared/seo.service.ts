import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config: any) {
    // default values
    config = { 
      title: 'Sagecapita Luxury Real Estate', 
      description: 'Sage Capita is a luxury real estate brokerage firm, serving Nigeria and other important cities of the world. Specializing in outstanding high-end investment portfolio that includes true dream homes, luxury villas, castles for sale and luxury estates that can satisfy all needs. We offer a constantly updated selection of splendid villas for sale with the purpose to offer our clients a full catalogue inclusive of prestigious estates and dream homes, located in the most extraordinary areas of Nigeria and several important cities of the world.', 
      image: 'https://sagecapita.com/assets/image_3.jpg',
      slug: '',
      ...config
    };

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'Sagecapita.com' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sagecapita.com' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://sagecapita.com/${config.slug}` });
  }

}
