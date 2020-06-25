import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordResetGuard } from './password-reset.guard';

import { PasswordResetComponent } from './password-reset.component';

const routes: Routes = [{ path: '', component: PasswordResetComponent, canActivate: [PasswordResetGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetRoutingModule { }
