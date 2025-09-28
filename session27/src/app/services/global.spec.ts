import { TestBed } from '@angular/core/testing';

import { Global } from './global';

describe('Global', () => {
  let service: Global;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Global);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
