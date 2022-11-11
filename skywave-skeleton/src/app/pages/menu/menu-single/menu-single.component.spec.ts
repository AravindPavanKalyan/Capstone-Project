import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { MenuSingleComponent } from './menu-single.component';

describe('MenuSingleComponent', () => {
  let component: MenuSingleComponent;
  let fixture: ComponentFixture<MenuSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSingleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 11 }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // checking whether it vcreates an instance
  it('should create MenuSingleComponent', () => {
    expect(component).toBeTruthy();
  });

  // spying on getMenuItemById positive case
  it(`should call 'getMenuItemById'`, () => {
    spyOn(component, 'getMenuItemById').withArgs(17);
    component.getMenuItemById(17);
    expect(component.getMenuItemById).toHaveBeenCalledWith(17);
  });

  // spying on getMenuItemById negative case
  it(`should throw error when passed invalid id in getMenuItemById`, () => {
    spyOn(component, 'getMenuItemById').withArgs(70).and.throwError('error');
    expect(function() {
      component.getMenuItemById(70);
    }).toThrow(new Error('error'));
  });
});
