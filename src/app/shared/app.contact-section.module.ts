import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactSectionComponent } from '../contact-section/contact-section.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactSectionComponent
  ],
  exports: [
    ContactSectionComponent
  ]
})

export class ContactSectionModule { }
