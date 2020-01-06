import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  // Observable string sources
  private subject = new Subject<any>();
  private lang;

  // Observable string streams
  subject$ = this.subject.asObservable();

  constructor() {
  }

  public getLang() {
    return this.lang;
  }

  public setLang(newlang: string) {
    if (this.lang === newlang) {
      return;
    }

    this.lang = newlang;
    this.onLanguageChange(newlang);
  }

  private onLanguageChange(newlang: string) {
    this.subject.next(newlang);
  }
}
