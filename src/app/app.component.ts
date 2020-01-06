import { Component, OnInit } from '@angular/core';

import { NavigateEventService } from './navigate-event.service';

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

export class AppComponent implements OnInit {
  title = 'sagecapita';
  page = document.location.pathname;
  isPageLoading = false;

  constructor(private navigateEventService: NavigateEventService) {
    navigateEventService.navigation$.subscribe(
      navigation => {
        this.page = /*JSON.parse(navigation).url*/document.location.pathname;
      });

    navigateEventService.navigationStart$.subscribe(
      navigation => {
        this.isPageLoading = true;
      });

    navigateEventService.navigationStop$.subscribe(
      navigation => {
        this.isPageLoading = false;
      });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  onDropDownClick(dropdown) {
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    document.getElementById(dropdown).classList.toggle('show');
  }

  windowCloseDropDown(event) {
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

  ngOnInit() {
  }

}
