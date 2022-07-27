import { TestBed } from '@angular/core/testing';

import { LayoutInitService } from './layout-init.service';

describe('LayoutInitService', () => {
  let service: LayoutInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
