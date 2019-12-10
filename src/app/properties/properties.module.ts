import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';

import { PropertiesSearchModule } from '../shared/app.properties-search.module';
import { PaginatorModule } from '../shared/app.paginator.module';
import { CarouselGalleryModule } from '../shared/app.carousel-gallery.module';
import { ContactSectionModule } from '../shared/app.contact-section.module';

import { PropertiesComponent } from './properties.component';
import { PropertyComponent } from './property/property.component';


@NgModule({
  declarations: [PropertiesComponent, PropertyComponent],
  imports: [
    ContactSectionModule,
    CarouselGalleryModule,
    PaginatorModule,
    PropertiesSearchModule,
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
