import { TestBed } from '@angular/core/testing';

import { PostnewService } from './postnew.service';

describe('PostnewService', () => {
  let service: PostnewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostnewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
