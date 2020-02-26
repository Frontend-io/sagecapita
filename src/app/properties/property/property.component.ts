import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PropertyService } from '../../shared/property.service';

import { Property } from '../../shared/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  private code: string;
  public property;

  constructor(private router: Router, private route: ActivatedRoute, private propertyService: PropertyService) { }

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
      }, (err: any) => {
      });
  }

  public onPropertySearch($event: any): void {
    this.router.navigate(['/properties'], { queryParams: $event });
  }

}
