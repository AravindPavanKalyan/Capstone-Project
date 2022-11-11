import { TestBed } from '@angular/core/testing';
import { MatPaginatorI18nService } from './mat-paginator-i18n.service';

describe('MatPaginatorI18nService', () => {
  let service: MatPaginatorI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatPaginatorI18nService],
    });
    service = TestBed.inject(MatPaginatorI18nService);
  });

  beforeEach(() => {});

  // testing whether MatPaginatorI18nService created
  it('should create MatPaginatorI18nService', () => {
    expect(service).toBeTruthy();
  });
});
