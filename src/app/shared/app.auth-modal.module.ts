import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    AuthModalComponent
  ],
  exports: [
    AuthModalComponent
  ],
  entryComponents: [AuthModalComponent]
})

export class AuthModalModule { }
