import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateEventService {
  // Observable string sources
  private NavigationSource = new Subject<string>();

  // Observable string streams
  navigation$ = this.NavigationSource.asObservable();

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.NavigationSource.next(JSON.stringify(event));
          }
        });
  }
}
