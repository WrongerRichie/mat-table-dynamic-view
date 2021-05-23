import { TestBed } from '@angular/core/testing';

import { MatTableDynamicViewService } from './mat-table-dynamic-view.service';

describe('MatTableDynamicViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatTableDynamicViewService = TestBed.get(MatTableDynamicViewService);
    expect(service).toBeTruthy();
  });
});
