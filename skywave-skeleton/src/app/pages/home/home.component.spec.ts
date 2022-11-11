import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check whether it creates an instance
  it('should create a component HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  // calling ngOnInit and getSpecialMenuItems and recieve mockData
  it(`should call 'ngOnInit' and getSpecialMenuItems and recieve mockData`, (done: DoneFn) => {
    // Spying on ngOnInit
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();

    const menuItems = [
      // MockData to be recieved from getSpecialMenuItems
      {
        id: 27,
        name: 'Seasonal Fruits',
        description: 'Delicious Seasonal Fruits',
        price: 9.5,
        image: {
          small: 'assets/images/foods/desserts/1/small.jpg',
          medium: 'assets/images/foods/desserts/1/medium.jpg',
          big: 'assets/images/foods/desserts/1/big.jpg',
        },
        discount: 10,
        ratingsCount: 4,
        ratingsValue: 480,
        availibilityCount: 5,
        cartCount: 0,
        weight: 250,
        isVegetarian: false,
        categoryId: 7,
      },
    ];

    // spying on getSpecialMenuItems
    spyOn(component.appService, 'getSpecialMenuItems').and.returnValue(
      of(menuItems)
    );
    component.appService.getSpecialMenuItems().subscribe({
      next: (res) => {
        expect(res).toEqual(menuItems);
        done();
      },
      error: (res) => {
        expect(res).toThrowError();
        done();
      },
    });
  });
});
