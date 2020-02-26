import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './password-reset.component';


@NgModule({
  declarations: [PasswordResetComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    PasswordResetRoutingModule
  ]
})
export class PasswordResetModule { }
