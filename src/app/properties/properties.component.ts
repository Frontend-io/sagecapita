import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PropertiesSearchComponent } from '../properties-search/properties-search.component';
import { PaginatorComponent } from '../paginator/paginator.component';

import { PropertiesService } from './properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css', '../shared/app.properties-search.css']
})
export class PropertiesComponent implements OnInit {
  @ViewChild(PropertiesSearchComponent, { static: false })
  @ViewChild(PaginatorComponent, { static: false })
  private propertiesSearchComponent: PropertiesSearchComponent;
  private paginatorComponent: PaginatorComponent;

  public propertiesPaginationForm = this.fb.group({
    criteria: ['price_up', Validators.required],
    numberPerPage: ['4', Validators.required]
  });

  constructor(private fb: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit() {
    //get 
  }

  private search(): void {
    this.propertiesService.getProperties({}).subscribe(({ data }: any) => {
      console.log(data);
    }, (err: any) => {
    });
  }

  private getQueryPaginationValues(): any {
    const { controls } = this.propertiesPaginationForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);

    return body;
  }

}
