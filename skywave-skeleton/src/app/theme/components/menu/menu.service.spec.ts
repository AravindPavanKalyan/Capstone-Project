import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(MenuService);
  });

  beforeEach(() => {
    service = new MenuService();
  });

  // testing whether MenuService is created
  it('should create MenuService', () => {
    expect(service).toBeTruthy();
  });
});
