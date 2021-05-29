import { TestBed } from '@angular/core/testing';

import { AnketequestionService } from './anketequestion.service';

describe('AnketequestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnketequestionService = TestBed.get(AnketequestionService);
    expect(service).toBeTruthy();
  });
});
