import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesSearchModule } from './shared/app.properties-search.module';
import { PaginatorModule } from './shared/app.paginator.module';
import { ContactSectionModule } from './shared/app.contact-section.module';
import { ExclusivePropertiesModule } from './shared/app.exclusive-properties.module';
import { PageNotFoundModule } from './shared/app.page-not-found.module';
import { PropertyThumbnailModule } from './shared/app.property-thumbnail.module';

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
    PropertyGroupComponent
  ],
  imports: [
    ContactSectionModule,
    PaginatorModule,
    PropertiesSearchModule,
    ExclusivePropertiesModule,
    PageNotFoundModule,
    PropertyThumbnailModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
