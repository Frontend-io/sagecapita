import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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

import { PropertiesSearchModule } from './shared/app.properties-search.module';
import { PaginatorModule } from './shared/app.paginator.module';
import { ContactSectionModule } from './shared/app.contact-section.module';
import { ExclusivePropertiesComponent } from './exclusive-properties/exclusive-properties.component';

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
    ExclusivePropertiesComponent
  ],
  imports: [
    ContactSectionModule,
    PaginatorModule,
    PropertiesSearchModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
