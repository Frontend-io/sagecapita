import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NumberMillionsPipe } from './number-millions.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NumberMillionsPipe
  ],
  exports: [
    NumberMillionsPipe
  ]
})

export class NumberMillionsModule { }
