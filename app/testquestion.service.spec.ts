import { TestBed } from '@angular/core/testing';

import { TestquestionService } from './testquestion.service';

describe('TestquestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestquestionService = TestBed.get(TestquestionService);
    expect(service).toBeTruthy();
  });
});
