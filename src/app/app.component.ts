import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { CanonicalService } from './shared/canonical.service';
import { PropertyService } from './shared/property.service';

import { NavigateEventService } from './navigate-event.service';
import { AppService } from './app.service';
import { AuthManagerService } from './shared/auth-manager.service';

import { fadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  animations: [fadeAnimation],
  providers: [NavigateEventService]
})

export class AppComponent implements OnInit, OnDestroy {
  public title: string;
  public page = document.location.pathname;
  public isPageLoading = false;
  public propertyCodeForm = this.fb.group({
    code: ['', Validators.required]
  });
  public newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    privacy_policy_check: ['', Validators.requiredTrue]
  });
  public isDesktop = false;
  public isMobileNavOpen = false;
  public formMessage
    = 'Subscribe to our newsletter for real estate tips and strategies,\
     as well as updates on Sage Capita’s exclusive properties and newest listings.';
  public isSubmitting = false;
  public loggedinUserFirstName: string;
  public favCount: number;

  private resizeFn: { (): void; (): void; (this: Window, ev: UIEvent): any; (this: Window, ev: UIEvent): any; };

  constructor(
    private appService: AppService,
    private navigateEventService: NavigateEventService,
    private authManagerService: AuthManagerService,
    private fb: FormBuilder,
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService,
    private propertyService: PropertyService,
    private router: Router,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Sagecapita, Luxury real estate, Luxury property, land, lagos, abuja, dubia' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Zenith Wogwugwu' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-03-20', scheme: 'YYYY-MM-DD' },
      { name: 'description', content: 'Sage Capita is a luxury real estate brokerage firm, serving Nigeria and other important cities of the world. Specializing in outstanding high-end investment portfolio that includes true dream homes, luxury villas, castles for sale and luxury estates that can satisfy all needs. We offer a constantly updated selection of splendid villas for sale with the purpose to offer our clients a full catalogue inclusive of prestigious estates and dream homes, located in the most extraordinary areas of Nigeria and several important cities of the world.' },
      { charset: 'UTF-8' }
    ]);

    this.canonicalService.setCanonicalURL();

    this.navigateEventService
      .navigation$
      .subscribe(
        (navigation) => {
          this.page = /*JSON.parse(navigation).url*/document.location.pathname;

          const pageTitle
            = this.page
              .substring(1)
              .split('/')
              .map((titleTok) => `${titleTok.substring(0, 1).toUpperCase()}${titleTok.substring(1).toLowerCase()}`)
              .reverse()
              .join('/');

          this.titleService
            .setTitle(`${pageTitle ? pageTitle.replace(/\//g, ' - ').replace(/_/g, ' ') + ' - ' : ''}Sagecapita`);
        });

    this.navigateEventService
      .navigationStart$
      .subscribe(
        (navigation) => {
          this.isPageLoading = true;
        });

    this.navigateEventService
      .navigationStop$
      .subscribe(
        (navigation) => {
          this.isPageLoading = false;
        });

    this.authManagerService
      .loginSubject$
      .subscribe(
        (loggedinUser: Promise<any>) => {
          loggedinUser
            .then(({ first_name }) => this.loggedinUserFirstName = first_name)
            .catch(() => this.loggedinUserFirstName = undefined);
        });

    this.appService.favoriteRefresh$.subscribe(
      () => {
        this.authManagerService
          .checkAuth()
          .then(() => this.appService
            .getFavoritesCount()
            .subscribe((count) => {
              this.favCount = count;
            }, (err: any) => {
              console.log(err);
            })).catch(() => { });
      });

    this.appService
      .favoriteRefreshed();

    // this.authManagerService
    //   .getLoggedInUser()
    //   .then(({ first_name }) => this.loggedinUserFirstName = first_name)
    //   .catch();

    this.resizeFn = () => {
      this.isDesktop = window.innerWidth > 960;
    };

    window.addEventListener('resize', this.resizeFn);

    this.resizeFn();

    window.setTimeout((() => this.processOutsideOfAngularZone()), 1000);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeFn);
  }

  public getRouterOutletState(outlet: { isActivated: any; activatedRoute: any; }) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public searchPropertyCode(): void {
    const { code } = this.propertyCodeForm.value;

    if (code) {
      this.propertyService.propertyCodeExists(code)
        .subscribe(() => {
          this.router.navigate(['/properties', code]);
        }, (err: any) => {
          alert(err.message);
        });
    }
  }

  public toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  onDropDownClick(dropdown: string) {
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    document.getElementById(dropdown).classList.toggle('show');
  }

  windowCloseDropDown(event: { target: { matches: (arg0: string) => any; }; }) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      let i: number;

      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  public onSubmit(): void {
    if (!this.newsletterForm.valid) {
      return;
    }

    const { email } = this.newsletterForm.value;

    this.formMessage = 'Submitting...';
    this.isSubmitting = true;

    this.appService.submit({ email, privacy_policy_check: true })
      .subscribe((res) => {
        this.isSubmitting = false;

        this.formMessage = res.message;

        this.newsletterForm.reset();
      }, (err: any) => {
        this.formMessage = err.message;

        this.isSubmitting = false;
      });
  }

  private processOutsideOfAngularZone() {
    this.ngZone.runOutsideAngular(() => {
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];

      s1.async = true;
      s1.src = 'https://embed.tawk.to/5e555acfa89cda5a1887e498/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    });
  }

  get newsletterFormControls(): any {
    return this.newsletterForm['controls'];
  }

}
