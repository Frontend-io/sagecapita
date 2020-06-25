import { TestBed, async, inject } from '@angular/core/testing';

import { PropertyGuard } from './property.guard';

describe('PropertyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyGuard]
    });
  });

  it('should ...', inject([PropertyGuard], (guard: PropertyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
