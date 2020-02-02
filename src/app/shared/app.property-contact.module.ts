import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PropertyContactComponent } from '../property-contact/property-contact.component';
import { ModalComponent } from '../property-contact/modal/modal.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    PropertyContactComponent,
    ModalComponent
  ],
  exports: [
    PropertyContactComponent
  ],
  entryComponents: [ModalComponent]
})

export class PropertyContactModule { }
