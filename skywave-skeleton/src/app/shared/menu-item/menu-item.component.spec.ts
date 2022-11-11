import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MenuItemComponent } from './menu-item.component';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check whether it creates an instance
  it('should create MenuItemComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing getColumnCount method
  it('should call getColumnCount', () => {
    // testing the if conditions
    component.getColumnCount(25);
    expect(component.column).toBe(4);
    component.getColumnCount(33.3);
    expect(component.column).toBe(3);
    component.getColumnCount(50);
    expect(component.column).toBe(2);

    // testing the else condition
    component.getColumnCount(20);
    expect(component.column).toBe(1);
  });
});
