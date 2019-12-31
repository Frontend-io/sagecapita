import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropertyService } from '../shared/property.service';

import { Property } from '../shared/property';

@Component({
  selector: 'app-carousel-gallery',
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.css']
})
export class CarouselGalleryComponent implements OnInit {
  property: Property;

  slideIndex = 1;

  constructor(private propertyService: PropertyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>
      this.property = this.propertyService.getProperty(paramMap.get('code'))
    );
  }

  onRenderSlides(): string {
    this.showSlides(this.slideIndex);

    return '';
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i: number;
    const slides: any = document.querySelectorAll('#carousel_gallery .mySlides');
    const dots: any = document.querySelectorAll('#carousel_gallery .demo');
    const captionText: any = document.querySelectorAll('#carousel_gallery .caption');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }
} 
