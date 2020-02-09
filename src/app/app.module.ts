import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';

import { authHttpInterceptorProvider } from './shared/auth-http-interceptor-provider';

import { PropertiesSearchModule } from './shared/app.properties-search.module';
import { PaginatorModule } from './shared/app.paginator.module';
import { ContactSectionModule } from './shared/app.contact-section.module';
import { ExclusivePropertiesModule } from './shared/app.exclusive-properties.module';
import { PageNotFoundModule } from './shared/app.page-not-found.module';
import { PropertyThumbnailModule } from './shared/app.property-thumbnail.module';
import { PropertySearchThumbnailModule } from './shared/app.property-search-thumbnail.module';
import { PropertyContactModule } from './shared/app.property-contact.module';
import { AuthModalModule } from './shared/app.auth-modal.module';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './links-services/services.component';
import { FirmComponent } from './firm/firm.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { JoinComponent } from './join/join.component';
import { InfoAsideComponent } from './info-aside/info-aside.component';
import { InfoButtonAsideComponent } from './info-button-aside/info-button-aside.component';
import { TopSelectionsComponent } from './top-selections/top-selections.component';
import { LatestAcquisitionsComponent } from './latest-acquisitions/latest-acquisitions.component';
import { PropertyGroupsComponent } from './property-groups/property-groups.component';
import { NavigationAnimationComponent } from './navigation-animation/navigation-animation.component';
import { PropertyGroupComponent } from './property-group/property-group.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { LanguageButtonComponent } from './language-button/language-button.component';
import { CurrencyButtonComponent } from './currency-button/currency-button.component';
import { GalleryPropertyThumbnailComponent } from './gallery-property-thumbnail/gallery-property-thumbnail.component';
import { GalleryMostSeenComponent } from './gallery-most-seen/gallery-most-seen.component';
import { GalleryRecentlyUploadedComponent } from './gallery-recently-uploaded/gallery-recently-uploaded.component';
import { GallerySoldPropertiesComponent } from './gallery-sold-properties/gallery-sold-properties.component';
import { GalleryMainPropertyComponent } from './gallery-main-property/gallery-main-property.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    ServicesComponent,
    FirmComponent,
    MediaComponent,
    ContactComponent,
    JoinComponent,
    InfoAsideComponent,
    InfoButtonAsideComponent,
    TopSelectionsComponent,
    LatestAcquisitionsComponent,
    PropertyGroupsComponent,
    NavigationAnimationComponent,
    PropertyGroupComponent,
    GalleryComponent,
    HomeGalleryComponent,
    LanguageButtonComponent,
    CurrencyButtonComponent,
    GalleryPropertyThumbnailComponent,
    GalleryMostSeenComponent,
    GalleryRecentlyUploadedComponent,
    GallerySoldPropertiesComponent,
    GalleryMainPropertyComponent,
    FavoritesComponent
  ],
  imports: [
    PropertyContactModule,
    ContactSectionModule,
    PaginatorModule,
    PropertiesSearchModule,
    ExclusivePropertiesModule,
    PageNotFoundModule,
    PropertyThumbnailModule,
    PropertySearchThumbnailModule,
    AuthModalModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DecimalPipe,
    authHttpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
