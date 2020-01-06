import { Component, OnInit, OnDestroy } from '@angular/core';

import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-button',
  templateUrl: './currency-button.component.html',
  styleUrls: [
    './currency-button.component.css',
    '../app.component-topnav-dropdown.css'
  ]
})
export class CurrencyButtonComponent implements OnInit, OnDestroy {
  public currency = ['₦', 'NGN'];

  constructor(private currencyService: CurrencyService) { 
    this.currencyService.setCurrency(this.currency);
  }

  selectCurrency(currencySign, currencyShort) {
    this.currency = [currencySign, currencyShort];
    this.currencyService.setCurrency(this.currency);
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
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', this.windowCloseDropDown);
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.windowCloseDropDown);
  }

}
