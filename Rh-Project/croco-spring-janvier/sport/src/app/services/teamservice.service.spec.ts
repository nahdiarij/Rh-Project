import { TestBed } from '@angular/core/testing';

import { TeamserviceService } from './teamservice.service';

describe('TeamserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamserviceService = TestBed.get(TeamserviceService);
    expect(service).toBeTruthy();
  });
});
