import { TestBed } from '@angular/core/testing';

import { ApiMoviesService } from './api-movies.service';

describe('ApiMoviesService', () => {
  let service: ApiMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
