import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.css']
})
export class FirmComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({name: 'title', content: 'Firm - Sagecapita'});
    this.title.setTitle('Firm - Sagecapita');
  }

}
