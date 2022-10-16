import { TestBed } from '@angular/core/testing';

import { SpyStuffGuard } from './spy-stuff.guard';

describe('SpyStuffGuard', () => {
  let guard: SpyStuffGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SpyStuffGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
