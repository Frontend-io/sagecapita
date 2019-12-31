import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyThumbnailComponent } from '../property-thumbnail/property-thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PropertyThumbnailComponent
  ],
  exports: [
    PropertyThumbnailComponent
  ]
})

export class PropertyThumbnailModule { }
