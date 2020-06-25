import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PropertiesSearchComponent } from '../properties-search/properties-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    PropertiesSearchComponent
  ],
  exports: [
    PropertiesSearchComponent
  ]
})

export class PropertiesSearchModule { }
