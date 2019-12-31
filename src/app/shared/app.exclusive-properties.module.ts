import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExclusivePropertiesComponent } from '../exclusive-properties/exclusive-properties.component';
import { PropertyThumbnailModule } from './app.property-thumbnail.module';

@NgModule({
  imports: [
    PropertyThumbnailModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    ExclusivePropertiesComponent
  ],
  exports: [
    ExclusivePropertiesComponent
  ]
})

export class ExclusivePropertiesModule { }
