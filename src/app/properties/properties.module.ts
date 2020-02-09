import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { PropertiesRoutingModule } from './properties-routing.module';

import { PropertiesSearchModule } from '../shared/app.properties-search.module';
import { PaginatorModule } from '../shared/app.paginator.module';
import { CarouselGalleryModule } from '../shared/app.carousel-gallery.module';
import { ContactSectionModule } from '../shared/app.contact-section.module';
import { ExclusivePropertiesModule } from '../shared/app.exclusive-properties.module';
import { PropertyThumbnailModule } from '../shared/app.property-thumbnail.module';
import { PropertySearchThumbnailModule } from '../shared/app.property-search-thumbnail.module';

import { PropertiesComponent } from './properties.component';
import { PropertyComponent } from './property/property.component';
import { ViewedPropertiesComponent } from './viewed-properties/viewed-properties.component';
import { PropertyInfoComponent } from './property-info/property-info.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyComponent,
    ViewedPropertiesComponent,
    PropertyInfoComponent
  ],
  imports: [
    ContactSectionModule,
    CarouselGalleryModule,
    PaginatorModule,
    PropertiesSearchModule,
    ExclusivePropertiesModule,
    PropertyThumbnailModule,
    PropertySearchThumbnailModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
