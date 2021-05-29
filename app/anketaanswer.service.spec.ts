import { TestBed } from '@angular/core/testing';

import { AnketaAnswerService } from './anketaanswer.service';

describe('AnketaanswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnketaAnswerService = TestBed.get(AnketaAnswerService);
    expect(service).toBeTruthy();
  });
});
