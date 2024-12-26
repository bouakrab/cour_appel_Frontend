import { TestBed } from '@angular/core/testing';

import { PlaintsService } from './plaints.service';

describe('PlaintsService', () => {
  let service: PlaintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaintsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
