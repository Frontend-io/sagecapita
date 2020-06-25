import { TestBed } from '@angular/core/testing';

import { JwtManagerService } from './jwt-manager.service';

describe('JwtManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtManagerService = TestBed.get(JwtManagerService);
    expect(service).toBeTruthy();
  });
});
