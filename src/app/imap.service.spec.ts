import { TestBed, inject } from '@angular/core/testing';

import { ImapService } from './imap.service';

describe('ImapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImapService]
    });
  });

  it('should be created', inject([ImapService], (service: ImapService) => {
    expect(service).toBeTruthy();
  }));
});
