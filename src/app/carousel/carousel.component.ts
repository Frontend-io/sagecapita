import { Component, OnInit, OnDestroy } from '@angular/core';
// import { $ } from 'protractor';
import { getCurrencySymbol } from '@angular/common';

import { Property } from '../shared/property';

import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit, OnDestroy {
  slideIndex: any = 1;
  destroyed = false;
  timeout = null;
  public properties: Property[] = [];

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.getHomeCarouselProperties().then(() => {
      window.setTimeout(() => {
        this.showSlides(this.slideIndex);

        (function _() {
          this.timeout = window.setTimeout(() => {
            this.timeout = null;

            this.plusSlides(1);

            if (!this.destroyed) {
              _.bind(this)();
            }
          }, 5000);
        }.bind(this)());
      }, 0);
    });
  }

  ngOnDestroy() {
    this.destroyed = true;
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  public getHomeCarouselProperties(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.propertyService.getHomeCarouselProperties()
        .subscribe((homeCarousels: any) => {
          this.properties = homeCarousels;

          resolve();
        }, (err: any) => {
          console.log(err);
          reject();
        });
    });
  }

  public getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

  plusSlides(n) {
    this.slideIndex += n;

    this.showSlides(this.slideIndex);
  }

  currentSlide(n) {
    this.slideIndex = n;

    this.showSlides(this.slideIndex);
  }

  showSlides(n) {
    const slides: any = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    let i;

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
  }
}
