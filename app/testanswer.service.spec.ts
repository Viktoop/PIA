import { TestBed } from '@angular/core/testing';

import { TestAnswerService } from './testanswer.service';

describe('TestanswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestAnswerService = TestBed.get(TestAnswerService);
    expect(service).toBeTruthy();
  });
});
