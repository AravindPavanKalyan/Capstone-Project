import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemsCarouselComponent } from './menu-items-carousel.component';

describe('MenuItemsCarouselComponent', () => {
  let component: MenuItemsCarouselComponent;
  let fixture: ComponentFixture<MenuItemsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemsCarouselComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check whether it creates an instance
  it('should create MenuItemsCarouselComponent', () => {
    expect(component).toBeTruthy();
  });
});
