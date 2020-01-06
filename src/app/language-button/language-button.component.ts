import { Component, OnInit, OnDestroy } from '@angular/core';

import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: [
    './language-button.component.css',
    '../app.component-topnav-dropdown.css'
  ]
})
export class LanguageButtonComponent implements OnInit, OnDestroy {
  public lang = 'EN';

  constructor(private languageService: LanguageService) { 
    this.languageService.setLang(this.lang);
  }

  selectLang(lang) {
    this.lang = lang;
    this.languageService.setLang(this.lang);
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
