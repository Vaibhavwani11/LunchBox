import { TestBed } from '@angular/core/testing';

import { ClientMerchantService } from './client-merchant.service';

describe('ClientMerchantService', () => {
  let service: ClientMerchantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientMerchantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
