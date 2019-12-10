import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ContactSectionComponent
  ],
  exports: [
    ContactSectionComponent
  ]
})

export class ContactSectionModule { }
