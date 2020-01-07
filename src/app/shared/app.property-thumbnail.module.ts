import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NumberMillionsModule } from './app.number-millions.module';

import { PropertyThumbnailComponent } from '../property-thumbnail/property-thumbnail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NumberMillionsModule
  ],
  declarations: [
    PropertyThumbnailComponent,
  ],
  exports: [
    PropertyThumbnailComponent,
    NumberMillionsModule
  ]
})

export class PropertyThumbnailModule { }
