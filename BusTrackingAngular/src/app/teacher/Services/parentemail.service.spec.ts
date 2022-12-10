import { TestBed } from '@angular/core/testing';

import { ParentemailService } from './parentemail.service';

describe('ParentemailService', () => {
  let service: ParentemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
