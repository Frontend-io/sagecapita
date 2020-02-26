import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { PropertiesRoutingModule } from './properties-routing.module';

import {NgxTinySliderModule} from 'ngx-tiny-slider';

import { PropertiesSearchModule } from '../shared/app.properties-search.module';
import { PaginatorModule } from '../shared/app.paginator.module';
import { ContactSectionModule } from '../shared/app.contact-section.module';
import { ExclusivePropertiesModule } from '../shared/app.exclusive-properties.module';
import { PropertyThumbnailModule } from '../shared/app.property-thumbnail.module';
import { PropertySearchThumbnailModule } from '../shared/app.property-search-thumbnail.module';

import { PropertiesComponent } from './properties.component';
import { PropertyComponent } from './property/property.component';
import { ViewedPropertiesComponent } from './viewed-properties/viewed-properties.component';
import { PropertyInfoComponent } from './property-info/property-info.component';
import { PropertySliderComponent } from './property-slider/property-slider.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyComponent,
    ViewedPropertiesComponent,
    PropertyInfoComponent,
    PropertySliderComponent
  ],
  imports: [
    ContactSectionModule,
    PaginatorModule,
    PropertiesSearchModule,
    ExclusivePropertiesModule,
    PropertyThumbnailModule,
    PropertySearchThumbnailModule,
    NgxTinySliderModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    PropertiesRoutingModule
  ],
  exports: [
    NgxTinySliderModule
  ]
})
export class PropertiesModule { }
