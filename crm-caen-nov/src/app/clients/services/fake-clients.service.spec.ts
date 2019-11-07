import { TestBed } from '@angular/core/testing';

import { FakeClientsService } from './fake-clients';

describe('FakeClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeClientsService = TestBed.get(FakeClientsService);
    expect(service).toBeTruthy();
  });
});
