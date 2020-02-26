import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  public title = 'sagecapita';
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
    = 'Fill in the form to sign up to our newsletter and get updates on Sage Capita Luxury Real Estate\'s exclusive properties.';
  public isSubmitting = false;
  public loggedinUserFirstName: string;

  private resizeFn: { (): void; (): void; (this: Window, ev: UIEvent): any; (this: Window, ev: UIEvent): any; };

  constructor(
    private appService: AppService,
    private navigateEventService: NavigateEventService,
    private authManagerService: AuthManagerService,
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private router: Router,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.navigateEventService.navigation$.subscribe(
      navigation => {
        this.page = /*JSON.parse(navigation).url*/document.location.pathname;
      });

    this.navigateEventService.navigationStart$.subscribe(
      navigation => {
        this.isPageLoading = true;
      });

    this.navigateEventService.navigationStop$.subscribe(
      navigation => {
        this.isPageLoading = false;
      });

    this.authManagerService.loginSubject$.subscribe(
      (loggedinUser: Promise<any>) => {
        loggedinUser
          .then(({ first_name }) => this.loggedinUserFirstName = first_name)
          .catch(() => this.loggedinUserFirstName = undefined);
      });

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
