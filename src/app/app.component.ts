import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigateEventService } from './navigate-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './app.component-topnav-dropdown.css'
  ],
  providers: [NavigateEventService]
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'sagecapita';
  page = document.location.pathname;

  constructor(private navigateEventService: NavigateEventService) {
    navigateEventService.navigation$.subscribe(
      navigation => {
        this.page = JSON.parse(navigation).url;
      });
  }

  onDropDownClick(dropdown) {
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    document.getElementById(dropdown).classList.toggle("show"); 
  }

  windowCloseDropDown(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;

      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  ngOnInit() {
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', this.windowCloseDropDown);
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.windowCloseDropDown);
  }
}
