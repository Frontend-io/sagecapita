import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExclusivePropertiesComponent } from '../exclusive-properties/exclusive-properties.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ExclusivePropertiesComponent
  ],
  exports: [
    ExclusivePropertiesComponent
  ]
})

export class ExclusivePropertiesModule { }
