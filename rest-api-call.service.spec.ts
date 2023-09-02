import { TestBed } from '@angular/core/testing';

import { RestApiCallService } from './rest-api-call.service';

describe('RestApiCallService', () => {
  let service: RestApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
