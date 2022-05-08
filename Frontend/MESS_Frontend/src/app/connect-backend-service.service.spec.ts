import { TestBed } from '@angular/core/testing';

import { ConnectBackendServiceService } from './connect-backend-service.service';

describe('ConnectBackendServiceService', () => {
  let service: ConnectBackendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectBackendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
