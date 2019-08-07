import { TestBed } from '@angular/core/testing';

import { ProviderServicesService } from './provider-services.service';

describe('ProviderServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderServicesService = TestBed.get(ProviderServicesService);
    expect(service).toBeTruthy();
  });
});
