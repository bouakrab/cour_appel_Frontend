import { TestBed } from '@angular/core/testing';

import { DataPartiesService } from './data-parties.service';

describe('DataPartiesService', () => {
  let service: DataPartiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPartiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
