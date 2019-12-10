import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './links-services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FirmComponent } from './firm/firm.component';
import { JoinComponent } from './join/join.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'firm', component: FirmComponent },
  { path: 'join', component: JoinComponent },
  { path: 'media', component: MediaComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'properties', loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
