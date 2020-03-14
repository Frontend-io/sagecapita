import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { PropertyPhotosComponent } from './property-photos/property-photos.component';
import { PropertiesComponent } from './properties.component';
import { PropertyGuard } from '../shared/property.guard';
import { CheckAuthResolver } from '../shared/check-auth.resolver';

const resolve = {
  check_auth: CheckAuthResolver
};

const routes: Routes = [
  { path: '', component: PropertiesComponent, resolve },
  { path: 'property_photos/:code', component: PropertyPhotosComponent, resolve },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: ':code', canActivate: [PropertyGuard], component: PropertyComponent, resolve }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
