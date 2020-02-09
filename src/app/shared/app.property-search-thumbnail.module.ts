import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NumberMillionsModule } from './app.number-millions.module';

import { PropertySearchThumbnailComponent } from '../properties/property-search-thumbnail/property-search-thumbnail.component';

@NgModule({
  imports: [
    NumberMillionsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    PropertySearchThumbnailComponent
  ],
  exports: [
    PropertySearchThumbnailComponent
  ]
})

export class PropertySearchThumbnailModule { }
