import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties.component';
import { PropertyGuard } from './property.guard';

const routes: Routes = [
  { path: '', component: PropertiesComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: ':code', canActivate: [PropertyGuard], component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
