import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  // Observable string sources
  private subject = new Subject<any>();
  private currency;

  // Observable string streams
  subject$ = this.subject.asObservable();

  constructor() {
  }

  public getCurrency(): Array<string> {
    return this.currency;
  }

  public setCurrency(newcurrency): void {
    if (this.currency && (newcurrency[0] === this.currency[0] && newcurrency[1] === this.currency[1])) {
      return;
    }

    this.currency = newcurrency;
    this.onCurrencyChange(newcurrency);
  }

  private onCurrencyChange(newcurrency): void {
    this.subject.next(newcurrency);
  }
}
