import { TestBed } from '@angular/core/testing';

import { NavigateEventService } from './navigate-event.service';

describe('NavigateEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigateEventService = TestBed.get(NavigateEventService);
    expect(service).toBeTruthy();
  });
});
