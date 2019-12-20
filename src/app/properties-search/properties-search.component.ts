import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-search',
  templateUrl: './properties-search.component.html',
  styleUrls: ['./properties-search.component.css', '../shared/app.properties-search.css']
})
export class PropertiesSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelectChange() {
    // const scale = 'scale(1)';
    // document.body.style['webkitTransform'] = scale;    // Chrome, Opera, Safari
    // document.body.style['msTransform'] = scale;       // IE 9
    // document.body.style.transform = scale;     // General
  }
}
