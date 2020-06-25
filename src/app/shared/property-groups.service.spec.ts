import { TestBed } from '@angular/core/testing';

import { PropertyGroupService } from './property-group.service';

describe('PropertyGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyGroupService = TestBed.get(PropertyGroupService);
    expect(service).toBeTruthy();
  });
});
