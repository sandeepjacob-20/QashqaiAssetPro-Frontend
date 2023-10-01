import { TestBed } from '@angular/core/testing';

import { AssetmasterService } from './assetmaster.service';

describe('AssetmasterService', () => {
  let service: AssetmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
