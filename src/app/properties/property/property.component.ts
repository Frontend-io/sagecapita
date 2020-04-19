import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { PropertyService } from '../../shared/property.service';
import { SeoService } from '../../shared/seo.service';
import { CanonicalService } from '../../shared/canonical.service';

import { Property } from '../../shared/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  private code: string;
  public property;

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    private seoService: SeoService,
    private canonicalService: CanonicalService,
    private route: ActivatedRoute,
    private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.subject$.subscribe(
      () => {
        this.getProperty(this.code);
      });

    this.route.paramMap.subscribe(paramMap =>
      this.getProperty(paramMap.get('code'))
    );
  }

  private getProperty(code: string) {
    this.propertyService.getProperty(code)
      .subscribe((property: Property) => {
        this.property = property;
        this.code = code;

        this.meta.updateTag({ name: 'description', content: property.description_text });
        this.meta.updateTag({ name: 'title', content: property.main_title });

        this.title.setTitle(`${property.main_title} - Sagecapita`);

        this.canonicalService.setCanonicalURL(`https://sagecapita.com/properties/${property.code}/`);

        this.seoService
          .generateTags({
            title: property.main_title,
            description: property.description_text,
            image: property.photo.split('/').map((e, i) => {
              if (i === 4) {
                return `c_crop,h_630,w_1200`;
              }

              return e;
            }).join('/'),
            slug: property.code
          });
      }, (err: any) => {
      });
  }

  public onPropertySearch($event: any): void {
    const params
      = Object.keys($event)
        .filter((paramKey) => $event[paramKey])
        .reduce((acc, cur) => ({ ...acc, [cur]: $event[cur] }), {});

    this.router.navigate(['/properties'], { queryParams: params });
  }

}
