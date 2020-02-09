import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties.component';
import { PropertyGuard } from '../shared/property.guard';
import { CheckAuthResolver } from '../shared/check-auth.resolver';

const resolve = {
  check_auth: CheckAuthResolver
};

const routes: Routes = [
  { path: '', component: PropertiesComponent, resolve },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: ':code', canActivate: [PropertyGuard], component: PropertyComponent, resolve }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
