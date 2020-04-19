import { Component, NgZone, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
// import { $ } from 'protractor';
import { getCurrencySymbol, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

// import { Property } from '../shared/property';

import { PropertyService } from '../shared/property.service';
import { AuthManagerService } from '../shared/auth-manager.service';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarouselComponent implements OnInit, OnDestroy {
  slideIndex: any = 1;
  destroyed = false;
  timeout = null;
  // public properties: Property[] = [];

  constructor(
    private propertyService: PropertyService,
    private authManagerService: AuthManagerService,
    private ngZone: NgZone,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getHomeCarouselProperties().then(() => {
        this.ngZone.runOutsideAngular(() => {
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
        });
      });
    }
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
          // this.properties = homeCarousels;
          const carouselSlides = document.querySelector('.carouselSlides');
          const dotContainer = document.querySelector('.dotContainer');

          homeCarousels.forEach((property: any, index: number) => {
            const slide = this.createSlide(
              index,
              property.photo,
              property.main_title,
              property.suburb,
              property.city,
              property.state,
              property.description_text,
              property.code,
              property.interior_surface,
              property.is_exclusive,
              property.price,
              property.price_lower_range,
              property.price_upper_range);

            carouselSlides.appendChild(slide);

            const dot = document.createElement('span');
            dot.setAttribute('class', 'dot');
            dotContainer.appendChild(dot);
          });

          Array.from(document.querySelectorAll('.carouselSlides a'))
            .forEach((a) => a.addEventListener('click', (e) => {
              e.preventDefault();

              this.ngZone.run(() => {
                this.authManagerService.setRedirectUrl(a.getAttribute('data-redirectUrl'));
                this.router.navigateByUrl(a.getAttribute('href'));
              });

              return false;
            }));

          Array.from(document.querySelectorAll('.dotContainer .dot'))
            .forEach((dot, i) => dot.addEventListener('click', () => this.currentSlide(i + 1)));

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

  plusSlides(n: any) {
    this.slideIndex += n;

    this.showSlides(this.slideIndex);
  }

  currentSlide(n: number) {
    this.slideIndex = n;

    this.showSlides(this.slideIndex);
  }

  showSlides(n: number) {
    this.ngZone.runOutsideAngular(() => {
      const slides: any = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');
      let i: number;

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
    });
  }

  private createSlide(
    index: number,
    photo: string,
    mainTitle: string,
    suburb: string,
    city: string,
    state: string,
    descriptionText: string,
    code: string,
    interiorSurface: string,
    isExclusive: string,
    price: number,
    priceLowerRange: number,
    priceUpperRange: number): any {
    const d = document;
    const mySlides = d.createElement('div');
    const mySlidesImg = d.createElement('img');
    const textContainer = d.createElement('div');
    const textContainerContainerOverlay = d.createElement('div');
    const textContainerContainerContent = d.createElement('div');
    const textContainerContainerContentH3 = d.createElement('h3');
    const contentMobileHide = d.createElement('div');
    const contentMobileHideHr = d.createElement('hr');
    const contentMobileHideP = d.createElement('p');
    const contentMobileHidePSmall = d.createElement('small');
    const contentMobileHidePSmallStrong = d.createElement('strong');
    const contentMobileHideH4 = d.createElement('h4');
    const contentMobileHideP2 = d.createElement('p');
    const contentMobileHideP2Small = d.createElement('small');
    const contentMobileHideP2SmallStrong = d.createElement('strong');
    const textContainerContainerContentA = d.createElement('a');
    const textContainerContainerContentAH3 = d.createElement('h3');
    const textContainerContainerContentAH3U = d.createElement('u');
    const textContainerContainerContentH32 = document.createElement('h3');
    const textContainerContainerContentH33 = document.createElement('h3');
    const contentMobileHide2 = d.createElement('div');
    const contentMobileHide2A = d.createElement('a');
    const contentMobileHide2AButton = d.createElement('button');
    const contentMobileHide2A2 = d.createElement('a');
    const contentMobileHide2A2Button = d.createElement('button');

    const currency = this.getCurrencySymbol('NGN');

    mySlides.setAttribute('class', 'mySlides fade');
    mySlidesImg.setAttribute('src', photo);
    textContainer.setAttribute('class', `textContainer ${index % 2 === 0 ? 'left' : 'right'}`);
    textContainerContainerOverlay.setAttribute('class', 'textContainerContainerOverlay');
    textContainerContainerContent.setAttribute('class', 'textContainerContainerContent');
    textContainerContainerContentH3.textContent = this.titleCase(mainTitle);
    contentMobileHide.setAttribute('class', 'contentMobileHide');
    contentMobileHidePSmallStrong.textContent = `${suburb.toUpperCase()} - ${city.toUpperCase()} - ${state.toUpperCase()}`;
    contentMobileHideH4.textContent = descriptionText;
    contentMobileHideP2SmallStrong.textContent = `CODE. ${code} | ${interiorSurface} SQM`;
    textContainerContainerContentA.setAttribute('href', '/login');
    textContainerContainerContentA.setAttribute('data-redirectUrl', `/property/${code}`);
    textContainerContainerContentAH3U.textContent = 'SIGN IN FOR PRICE';
    textContainerContainerContentH32.textContent = `${this.getCurrencySymbol('NGN')}${this.numberMillions(price)}`;
    textContainerContainerContentH33.textContent
      = `${currency}${this.numberMillions(priceLowerRange)} TO ${currency}${this.numberMillions(priceUpperRange)}`;
    contentMobileHide2.setAttribute('class', 'contentMobileHide');
    contentMobileHide2A.setAttribute('href', `/properties/${code}`);
    contentMobileHide2AButton.setAttribute('class', 'whiteBtn');
    contentMobileHide2AButton.textContent = 'VIEW PROPERTY';
    contentMobileHide2A2.setAttribute('href', `/property_contact/${code}`);
    contentMobileHide2A2Button.setAttribute('class', 'transparentBtn');
    contentMobileHide2A2Button.textContent = 'REQUEST INFORMATION';

    contentMobileHide2A.appendChild(contentMobileHide2AButton);
    contentMobileHide2.appendChild(contentMobileHide2A);
    contentMobileHide2A2.appendChild(contentMobileHide2A2Button);
    contentMobileHide2.appendChild(contentMobileHide2A2);

    textContainerContainerContentAH3.appendChild(textContainerContainerContentAH3U);
    textContainerContainerContentA.appendChild(textContainerContainerContentAH3);

    contentMobileHideP2Small.appendChild(contentMobileHideP2SmallStrong);
    contentMobileHideP2.appendChild(contentMobileHideP2Small);

    contentMobileHidePSmall.appendChild(contentMobileHidePSmallStrong);
    contentMobileHideP.appendChild(contentMobileHidePSmall);

    contentMobileHide.appendChild(contentMobileHideHr);
    contentMobileHide.appendChild(contentMobileHideP);
    contentMobileHide.appendChild(contentMobileHideH4);
    contentMobileHide.appendChild(contentMobileHideP2);

    textContainerContainerContent.appendChild(textContainerContainerContentH3);
    textContainerContainerContent.appendChild(contentMobileHide);

    if (isExclusive && !(price || (priceLowerRange && priceUpperRange))) {
      textContainerContainerContent.appendChild(textContainerContainerContentA);
    }


    if (price) {
      textContainerContainerContent.appendChild(textContainerContainerContentH32);
    }

    if (priceLowerRange && priceUpperRange) {
      textContainerContainerContent.appendChild(textContainerContainerContentH33);
    }

    textContainerContainerContent.appendChild(contentMobileHide2);


    textContainer.appendChild(textContainerContainerOverlay);
    textContainer.appendChild(textContainerContainerContent);

    mySlides.appendChild(mySlidesImg);
    mySlides.appendChild(textContainer);

    return mySlides;
  }

  private titleCase(text: string): string {
    return text.split(' ')
      .map((tok) => `${tok.substring(0, 1).toUpperCase()}${tok.substring(1).toLowerCase()}`)
      .join(' ');
  }

  private numberMillions(numberAmount: number): string {
    return numberAmount < 1000000 ? String(numberAmount) : `${numberAmount / 1000000}M`;
  }
}
