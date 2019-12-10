import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertiesSearchComponent } from '../properties-search/properties-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PropertiesSearchComponent
  ],
  exports: [
    PropertiesSearchComponent
  ]
})

export class PropertiesSearchModule { }
