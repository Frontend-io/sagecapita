import { TestBed } from '@angular/core/testing';

import { PropertyGroupsService } from './property-groups.service';

describe('PropertyGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyGroupsService = TestBed.get(PropertyGroupsService);
    expect(service).toBeTruthy();
  });
});
