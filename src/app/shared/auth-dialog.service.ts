import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthModalComponent } from './auth-modal/auth-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthDialogService {

  constructor(private dialog: MatDialog) { }

  open(): Promise<any> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(AuthModalComponent, {
        restoreFocus: true,
        disableClose: true,
        data: {}
      });

      dialogRef
        .afterClosed()
        .subscribe(
          jwt => jwt ? resolve(jwt) : reject(null)
        );

    });
  }
}