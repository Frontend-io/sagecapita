import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './links-services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FirmComponent } from './firm/firm.component';
import { JoinComponent } from './join/join.component';
import { MediaComponent } from './media/media.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PropertyContactComponent } from './property-contact/property-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PropertyGuard } from './shared/property.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'firm', component: FirmComponent },
  { path: 'join', component: JoinComponent },
  { path: 'media', component: MediaComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'property_contact/:code', canActivate: [PropertyGuard], component: PropertyContactComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'properties', loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
