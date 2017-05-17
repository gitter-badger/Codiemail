import { TestBed, inject } from '@angular/core/testing';

import { SmtpService } from './smtp.service';

describe('SmtpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmtpService]
    });
  });

  it('should be created', inject([SmtpService], (service: SmtpService) => {
    expect(service).toBeTruthy();
  }));
});
