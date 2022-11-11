import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { AppInterceptor } from './app-interceptor';

describe('AppInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true,
        },
        AppInterceptor,
      ],
    });
  });
});
