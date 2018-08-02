import { TestBed, inject } from '@angular/core/testing';

import { RestcountriesHttpService } from './restcountries-http.service';

describe('RestcountriesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestcountriesHttpService]
    });
  });

  it('should be created', inject([RestcountriesHttpService], (service: RestcountriesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
