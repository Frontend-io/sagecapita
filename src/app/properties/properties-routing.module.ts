import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties.component';

const routes: Routes = [
  { path: '', component: PropertiesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PropertyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }