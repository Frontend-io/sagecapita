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
  public property;
  private code: string;

  slideIndex = 1;

  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {
    this.propertyService.subject$.subscribe(
      () => {
        this.getProperty(this.code);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>
      this.getProperty(paramMap.get('code'))
    );
  }

  getProperty(code) {
    this.propertyService.getProperty(code)
      .subscribe((property: Property) => {
        this.property = property;
        this.property['allPhotos'] = [this.property['photo'], ...this.property['photos']];
        this.code = code;
      }, (err: any) => {
      });
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
