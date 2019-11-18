import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  slideIndex: any = 1;

  constructor() {
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

  ngOnInit() {
    this.showSlides(this.slideIndex);

    (function _() {
      window.setTimeout(() => {
        this.plusSlides(1);

        _.bind(this)();
      }, 2000);
    }.bind(this)());
  }
}
