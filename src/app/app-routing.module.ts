import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { ServicesComponent } from './links-services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FirmComponent } from './firm/firm.component';
import { JoinComponent } from './join/join.component';
import { MediaComponent } from './media/media.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'firm', component: FirmComponent },
  { path: 'join', component: JoinComponent },
  { path: 'media', component: MediaComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  // constructor(private router: Router) {
  //   this.router.events
  //     .subscribe(
  //       (event: NavigationEvent) => {
  //         if (event instanceof NavigationStart) {
  //           console.log(event);

  //         }
  //       });
  // }
}
