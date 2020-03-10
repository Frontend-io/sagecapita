import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './links-services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FirmComponent } from './firm/firm.component';
import { JoinComponent } from './join/join.component';
import { TermsComponent } from './terms/terms.component';
import { MediaComponent } from './media/media.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PropertyContactComponent } from './property-contact/property-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PropertyGuard } from './shared/property.guard';
import { CheckAuthResolver } from './shared/check-auth.resolver';

const resolve = {
  check_auth: CheckAuthResolver
};
const routes: Routes = [
  { path: '', component: HomeComponent, resolve},
  { path: 'services', component: ServicesComponent, resolve },
  { path: 'contact', component: ContactComponent, resolve },
  { path: 'firm', component: FirmComponent, resolve },
  { path: 'join', component: JoinComponent, resolve },
  { path: 'media', component: MediaComponent, resolve },
  { path: 'gallery', component: GalleryComponent, resolve },
  { path: 'favorites', component: FavoritesComponent, resolve },
  { path: 'property_contact/:code', canActivate: [PropertyGuard], component: PropertyContactComponent, resolve },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy_policy', component: PrivacyPolicyComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'properties', loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'password_reset', loadChildren: () => import('./password-reset/password-reset.module').then(m => m.PasswordResetModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
