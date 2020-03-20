import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PropertyService } from '../../shared/property.service';
import { SeoService } from '../../shared/seo.service';

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
    private seoService: SeoService,
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

        this.seoService
          .generateTags({
            title: property.main_title,
            description: property.description_text,
            image: property.photo,
            slug: 'property-photos'
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
