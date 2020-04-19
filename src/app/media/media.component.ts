import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PaginatorComponent } from '../paginator/paginator.component';

import { MediaService } from './media.service';

import { countries } from '../shared/countries.json';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, AfterViewInit {
  @ViewChild(PaginatorComponent, { static: false })
  private paginatorComponent: PaginatorComponent;
  private nameTyped: Subject<string> = new Subject();

  public perPage = 8;
  public lastPage = 5;
  public newss1stHalf: any[];
  public newss2ndHalf: any[];
  public mediaForm = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    headline: ['', Validators.required],
    country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],

    privacy_policy_check: ['', Validators.requiredTrue]
  });
  public headlineSearchForm = this.fb.group({
    headline: ['']
  });
  public totalMedia: number;
  public allNewsCount: number;
  public allYears: number[];
  public currentYear: number;
  public countries = countries;
  public formMessage: string;
  public isSubmitting = false;

  constructor(private fb: FormBuilder, private mediaService: MediaService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({name: 'title', content: 'Media - Sagecapita'});
    this.title.setTitle('Media - Sagecapita');
    this.getTotalNews();
  }

  ngAfterViewInit() {
    this.getNewsYears()
      .then(() => this.getNewss());

    this.nameTyped.pipe(
      debounceTime(800)
    ).subscribe(typedName => {
      this.getNewss({ typedName });
    });
  }

  public getNewss({ newPage, typedName }: any = {}): Promise<void> {
    const name = typedName || this.headlineSearchForm['controls']['headline'].value;
    const page = newPage || this.paginatorComponent.getCurrentPage();

    const params = {
      page,
      per_page: this.perPage,
      name,
      year: this.currentYear
    };

    return new Promise((resolve, reject) => {
      this.mediaService.getNewss(params)
        .subscribe(({ data, last_page, total }) => {
          const newsMidPoint = Math.ceil(data.length / 2);
          this.newss1stHalf = data.slice(0, newsMidPoint);
          this.newss2ndHalf = data.slice(newsMidPoint, data.length);

          this.totalMedia = total;

          resolve(data);

          if (this.lastPage !== last_page) {
            this.lastPage = last_page;

            window.setTimeout(() => {
              this.paginatorComponent.reRender();

              if (!data.length) {
                this.onPageClick({ newPage: 1 });
              }
            }, 0);
          }
        }, (err: any) => {
          reject(err);
        });
    });
  }

  public getTotalNews(): void {
    this.mediaService.getTotalNews()
      .subscribe(({ news_count }) => {
        this.allNewsCount = news_count;
      }, (err: any) => {
      });
  }

  public getNewsYears(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.mediaService.getNewsYears()
        .subscribe(({ years }) => {
          this.allYears = years;
          this.currentYear = years[0];

          resolve();
        }, (err: any) => {
          reject();
        });
    });
  }

  public onYearClick(year: number): void {
    const lastYear = this.currentYear;
    this.currentYear = year;

    this.getNewss()
      .catch(() => this.currentYear = lastYear);
  }

  public onPageClick({ newPage, cb = null }): void {
    this.getNewss({ page: newPage }).then((data) => {
      if (cb) {
        cb();
      }

      this.paginatorComponent.onSetPage(newPage);
    });
  }

  public onNewsNameKeyUp(typedName: string) {
    this.nameTyped.next(typedName);
  }

  public onSubmit(): void {
    if (!this.mediaForm.valid) {
      return;
    }

    const { controls } = this.mediaForm;
    const body = {};

    Object.keys(controls).forEach((control) => body[control] = controls[control].value);
    body['country'] = controls['country'].value.toUpperCase();

    this.formMessage = 'Submitting...';
    this.isSubmitting = true;

    this.mediaService.submitMediaRequest(body)
      .subscribe((res) => {
        this.isSubmitting = false;

        this.formMessage = res.message;

        this.mediaForm.reset();
      }, (err: any) => {
        this.formMessage = err.message;

        this.isSubmitting = false;
      });
  }

  get mediaFormControls(): any {
    return this.mediaForm['controls'];
  }
}
