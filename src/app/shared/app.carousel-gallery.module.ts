import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselGalleryComponent } from '../carousel-gallery/carousel-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CarouselGalleryComponent
  ],
  exports: [
    CarouselGalleryComponent
  ]
})

export class CarouselGalleryModule { }
