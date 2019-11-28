import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './links-services/services.component';
import { FirmComponent } from './firm/firm.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { JoinComponent } from './join/join.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PropertyComponent,
    HomeComponent,
    ServicesComponent,
    FirmComponent,
    MediaComponent,
    ContactComponent,
    JoinComponent,
    PropertySearchComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
