import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SeoService } from '../../shared/seo.service';
import { Property } from '../../shared/property';

import { PropertyService } from '../../shared/property.service';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent implements OnInit {
  public propertyCode = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
  public propertyMainTitle: string;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private seoService: SeoService,
    private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getProperty(this.propertyCode, { imgSizing: 'baseXLargeThumbUrl', imgAttachmentSizing: 'baseAttachmentUrl' })
      .subscribe((property: Property) => {
        const photos = [...property.photos, property.photo];
        const photosAttachment = [...property['photosAttachment'], property['photoAttachment']];

        this.propertyMainTitle = property.main_title.split(' ')
          .map((tok) => `${tok.substring(0, 1).toUpperCase()}${tok.substring(1).toLowerCase()}`)
          .join(' ');

        this.ngZone.runOutsideAngular(() => {
          const photoItemsContainer = document.querySelector('#photoItemsContainer');
          const bottomNavThumbnails = document.querySelector('#bottomNavThumbnails');
          const thumbCircleItemsContainer = document.querySelector('#thumbCircleItemsContainer');
          const currentCarouselPhoto: any = document.querySelector('#currentCarouselPhoto');
          const carouselPhotoLength: any = document.querySelector('#carouselPhotoLength');
          const bottomNav = document.querySelector('#bottomNav');

          photos.forEach((photo: string, photoIndex: number) => {
            const onClickFn = () => {
              goFnIndex(photoIndex);
              continueCarouselTimer();
            };

            photoItemsContainer.appendChild(this.createPhotoDOM(photo, photosAttachment[photoIndex]));
            bottomNavThumbnails.appendChild(this.createThumbnailDOM(photo, onClickFn));
            thumbCircleItemsContainer.appendChild(this.createThumbnailCircleDOM(onClickFn));
          });

          const photoItems = Array.from(photoItemsContainer.children);
          const thumbnailItems = Array.from(bottomNavThumbnails.children);
          const thumbCircleItems = Array.from(thumbCircleItemsContainer.children);
          const delay = 5000;
          const photosLength = photos.length;
          const photosLengthMinus1 = photosLength - 1;
          const carouselTimerFn = (noAutoNext = false) => {
            if (!noAutoNext) {
              nextFnIndex();
            }

            currentCarouselPhoto.textContent = index + 1;

            goToPhotoIndex(index);

            carouselTimer = window.setTimeout(carouselTimerFn, delay);
          };
          const nextFnIndex = () => {
            if (index < photosLengthMinus1) {
              index += 1;
            } else {
              index = 0;
            }
          };
          const prevFnIndex = () => {
            if (index > 0) {
              index -= 1;
            } else {
              index = photosLengthMinus1;
            }
          };
          const goFnIndex = (goIndex: number) => {
            if (goIndex > 0 && goIndex < photosLength) {
              index = goIndex;
            } else {
              index = 0;
            }
          };
          const activateItems = (items: any[], photoIndex: number) => {
            items.forEach((item) => item.classList.remove('active'));

            items[photoIndex].classList.add('active');
          };
          const goToPhotoIndex = (photoIndex: number) => {
            [photoItems, thumbnailItems, thumbCircleItems]
              .forEach((items) => activateItems(items, photoIndex));
          };
          const continueCarouselTimer = () => {
            window.clearTimeout(carouselTimer);
            carouselTimerFn(true);
          };
          let index = -1;
          let carouselTimer: any;

          carouselPhotoLength.textContent = photos.length;

          carouselTimerFn();

          document.querySelector('#pp_prev').addEventListener('click', () => {
            prevFnIndex();
            continueCarouselTimer();
          });
          document.querySelector('#pp_next').addEventListener('click', () => {
            nextFnIndex();
            continueCarouselTimer();
          });

          bottomNav.addEventListener('mouseover', () => {
            bottomNavThumbnails['style'].transform = null;
          });

          bottomNav.addEventListener('mouseout', () => {
            bottomNavThumbnails['style'].transform = 'scale(0)';
          });
          bottomNavThumbnails['style'].transform = 'scale(0)';
        });

        this.seoService
          .generateTags({
            title: property.main_title,
            description: property.description_text,
            image: property.photo,
            slug: 'property-photos'
          });
      }, (err: any) => {
      });
  }

  private createPhotoDOM(photo: string, photoAttachment: string): any {
    const d = document;
    const photoDiv = d.createElement('div');
    const img = d.createElement('img');
    const download = d.createElement('div');
    const downloadDiv = d.createElement('div');
    const downloadDivA0 = d.createElement('a');
    const downloadDivA0Button = d.createElement('button');
    const downloadDivA0Img = d.createElement('img');
    const downloadDivA1 = d.createElement('a');
    const downloadDivA1Button = d.createElement('button');
    const downloadDivClearfix = d.createElement('div');

    downloadDivClearfix.setAttribute('class', 'clearfix');
    downloadDivA1.setAttribute('class', 'right');
    downloadDivA1.setAttribute('href', `/properties/${this.propertyCode}`);
    downloadDivA1Button.textContent = 'VIEW PROPERTY';
    downloadDivA1Button.setAttribute('id', 'view');
    downloadDivA0.setAttribute('class', 'right');
    downloadDivA0.setAttribute(
      'download',
      `${this.propertyMainTitle.substring(0, 1).toUpperCase()}${this.propertyMainTitle.substring(1).toLowerCase().replace(/\s/g, '_')}${photo.substring(photo.lastIndexOf('.'))}`
    );
    downloadDivA0.setAttribute('href', photoAttachment);
    // downloadDivA0.setAttribute('target', '_blank');
    downloadDivA0.setAttribute('title', 'Download Photo');
    downloadDivA0Button.setAttribute('id', 'dl');
    downloadDivA0Img.setAttribute('src', '../../../assets/download.png');
    downloadDivA0Img.setAttribute('alt', 'Download');

    img.setAttribute('src', photo);
    img.setAttribute('class', 'img');
    img.setAttribute('alt', 'Property Photo');

    download.setAttribute('class', 'pp_download');
    photoDiv.setAttribute('class', 'pp_photo');

    downloadDivA1.addEventListener('click', (e: any) => {
      e.preventDefault();

      this.ngZone.run(() => this.router.navigate(['/properties', this.propertyCode]));

      return false;
    });

    downloadDivA1.appendChild(downloadDivA1Button);

    downloadDivA0Button.appendChild(downloadDivA0Img);
    downloadDivA0.appendChild(downloadDivA0Button);

    downloadDiv.appendChild(downloadDivA0);
    downloadDiv.appendChild(downloadDivA1);
    downloadDiv.appendChild(downloadDivClearfix);

    download.appendChild(downloadDiv);

    photoDiv.appendChild(img);
    photoDiv.appendChild(download);

    return photoDiv;
  }

  private createThumbnailDOM(photo: string, onClickFn: any): any {
    const d = document;
    const thumbnail = d.createElement('div');
    const img = d.createElement('img');

    thumbnail.setAttribute('class', 'pp_thumbnail');
    img.setAttribute('src', photo);
    img.setAttribute('alt', 'Property Thumbnail');

    thumbnail.addEventListener('click', onClickFn);

    thumbnail.appendChild(img);

    return thumbnail;
  }

  private createThumbnailCircleDOM(onClickFn: any): any {
    const d = document;
    const thumbCircle = d.createElement('div');
    const svg = d.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const path = d.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', 'M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z');
    svg.setAttribute('viewBox', '0 0 50 50');
    thumbCircle.setAttribute('class', 'pp_thumbCircle');

    thumbCircle.addEventListener('click', onClickFn);

    svg.appendChild(path);
    thumbCircle.appendChild(svg);

    return thumbCircle;
  }
}
