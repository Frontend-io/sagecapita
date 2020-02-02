import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-property-contact',
  templateUrl: './property-contact.component.html',
  styleUrls: ['./property-contact.component.css']
})
export class PropertyContactComponent implements OnInit {
  constructor(
    public dialog: MatDialog, private router: Router,
    private location: Location,
    private route: ActivatedRoute) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      restoreFocus: true,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        // user pressed back button, so prevent going back 2 steps
        return;
      }

      if (this.location.getState()['navigationId'] === 1) {
        this.router.navigate(['../'], { relativeTo: this.route });
      } else {
        this.location.back();
      }
    });
  }

  ngOnInit() {
  }

}
