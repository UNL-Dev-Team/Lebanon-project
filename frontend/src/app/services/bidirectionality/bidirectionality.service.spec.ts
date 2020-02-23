import { TestBed } from '@angular/core/testing';

import { BidirectionalityService } from './bidirectionality.service';

describe('BidirectionalityService', () => {
  let service: BidirectionalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidirectionalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
