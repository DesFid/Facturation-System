import { TestBed } from '@angular/core/testing';

import { ClientServicesService } from './client-services.service';

describe('ClientServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientServicesService = TestBed.get(ClientServicesService);
    expect(service).toBeTruthy();
  });
});
