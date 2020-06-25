import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { Router } from '@angular/router';

// import { Property } from '../shared/property';
import { AppService } from '../app.service';
import { PropertyService } from '../shared/property.service';
import { AuthManagerService } from '../shared/auth-manager.service';

@Component({
  selector: 'app-property-thumbnail',
  templateUrl: './property-thumbnail.component.html',
  styleUrls: ['./property-thumbnail.component.css']
})
export class PropertyThumbnailComponent implements OnInit {
  @Input() property;

  constructor(
    private propertyService: PropertyService,
    private appService: AppService,
    private router: Router,
    private authManagerService: AuthManagerService) { }

  ngOnInit() {
  }

  public onSignupClick(): boolean {
    this.authManagerService.setRedirectUrl(`/properties/${this.property.code}`);
    this.router.navigate(['/login']);
    return false;
  }

  public onFavoriteClick(): void {
    this.checkLogin()
      .then(() => this.property['is_favorite'] ? this.unfavorite() : this.favorite())
      .catch(() => { });
  }

  getCurrencySymbol(currency: string) {
    return getCurrencySymbol(currency, 'narrow');
  }

  private checkLogin(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.authManagerService.checkAuth()
        .then(() => resolve())
        .catch(() => {
          this.actionAfterNotLoggedIn();
          reject();
        });
    });
  }

  private actionAfterNotLoggedIn(): void {
    if (window.confirm('Kindly login to take this action')) {
      this.authManagerService.setRedirectUrl(this.router.url);
      this.router.navigate(['/login']);
    }
  }

  private favorite(): void {
    this.propertyService.favorite(this.property['code'])
      .subscribe((res: any) => {
        this.appService.favoriteRefreshed();
        this.property['is_favorite'] = true;
      }, (err: any) => {
        switch (err.status) {
          case 401:
            this.actionAfterNotLoggedIn();
            break;
          default:
            window.alert(err.message);
            break;
        }
      });
  }

  private unfavorite(): void {
    this.propertyService.unfavorite(this.property['code'])
      .subscribe((res: any) => {
        this.appService.favoriteRefreshed();
        this.property['is_favorite'] = false;
      }, (err: any) => {
        switch (err.status) {
          case 401:
            this.actionAfterNotLoggedIn();
            break;
          default:
            window.alert(err.message);
            break;
        }
      });
  }

}
