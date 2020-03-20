import { TestBed, async, inject } from '@angular/core/testing';

import { AuthManagerGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthManagerGuard]
    });
  });

  it('should ...', inject([AuthManagerGuard], (guard: AuthManagerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
