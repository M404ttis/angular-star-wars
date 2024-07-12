import { TestBed } from '@angular/core/testing';

import { HighlightFilmsService } from './highlight-films.service';

describe('HighlightFilmsService', () => {
  let service: HighlightFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
