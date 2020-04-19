import { Component, OnInit, ViewChild, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Property } from '../../shared/property';

import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { NgxTinySliderComponent as NgxTinySliderInstance } from 'ngx-tiny-slider/lib/ngx-tiny-slider.component';

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styleUrls: ['./property-slider.component.css']
})
export class PropertySliderComponent implements OnInit {
  @Input() set property(property: Property) {
    if (isPlatformBrowser(this.platformId)) {
    if (property) {
      this.slider.sliderInstance.destroy();

      window.setTimeout(() => {
        this.rebuildSlideItems([property['photo'], ...property['photos']]);

        window.setTimeout(
          () => this.slider.sliderInstance = this.slider.sliderInstance.rebuild()
          , 0);
      }, 0);
    }
  }
  }

  public tinySliderConfig: NgxTinySliderSettingsInterface;
  @ViewChild('slider', { static: false }) slider: NgxTinySliderInstance;

  public isPlatformBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    this.tinySliderConfig = {
      autoplay: true,
      mouseDrag: true,
      lazyload: true,
      items: 1,
      swipeAngle: false,
      controlsContainer: '#propertySliderNav',
      responsive: {
        961: {
          items: 2,
          fixedWidth: 960,
          gutter: 10,
          edgePadding: 180,
        }
      }
    };
  }
  }

  private rebuildSlideItems(photos: string[]) {
    const propertySliderItems = document.querySelector('.slide-items');

    Array.from(propertySliderItems.childNodes).forEach((node) => propertySliderItems.removeChild(node));

    photos.forEach((photo) => {
      const photoItem = document.createElement('div');
      const photoImg = document.createElement('img');

      photoItem.setAttribute('class', 'item');
      photoImg.setAttribute('class', 'tns-lazy-img');
      photoImg.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
      photoImg.setAttribute('data-src', photo);
      photoImg.setAttribute('alt', 'Property photo');

      photoItem.appendChild(photoImg);
      propertySliderItems.appendChild(photoItem);
    });
  }

}
