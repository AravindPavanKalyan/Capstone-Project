import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Menu } from './menu.model';
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

  // testing getHorizontalMenuItems
  it('should create getHorizontalMenuItems', () => {
    const mockHorizontalMenuItems = [
      new Menu(1, 'NAV.HOME', '/', null, null, false, 0),
      new Menu(80, 'NAV.ABOUT_US', '/about', null, null, false, 0),
      new Menu(70, 'NAV.CONTACT', '/contact', null, null, false, 0),
    ];
    const horizontalMenuItems = service.getHorizontalMenuItems();
    expect(horizontalMenuItems).toEqual(mockHorizontalMenuItems);
  });
});
