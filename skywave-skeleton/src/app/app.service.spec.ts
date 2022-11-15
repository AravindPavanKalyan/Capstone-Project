import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { AppSettings } from './app.settings';

describe('AppService', () => {
  let service: AppService;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let datePipe: DatePipe;
  let dialog: MatDialog;
  let appSettings: AppSettings;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    service = TestBed.inject(AppService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']); // setting a httpClientSpy
  });

  beforeEach(() => {
    service = new AppService(
      httpClientSpy,
      datePipe,
      dialog,
      appSettings,
      translateService
    );
  });

  // testing whether AppService is created
  it('should create AppService', () => {
    expect(service).toBeTruthy();
  });

  // testing getMenuItems whether it return data
  it('should call getMenuItems and return data', (done: DoneFn) => {
    // mocking getMenuItems data
    const menuItems = [
      {
        id: 1,
        name: 'Snack Set',
        description:
          'Butter, cream, honey, salty cottage cheese, white cheese.',
        price: 8.2,
        image: {
          small: 'assets/images/foods/breakfast/1/small.jpg',
          medium: 'assets/images/foods/breakfast/1/medium.jpg',
          big: 'assets/images/foods/breakfast/1/big.jpg',
        },
        discount: 0,
        ratingsCount: 4,
        ratingsValue: 350,
        availibilityCount: 5,
        cartCount: 0,
        weight: 160,
        isVegetarian: false,
        categoryId: 1,
      },
    ];

    httpClientSpy.get.and.returnValue(of(menuItems));
    service.getMenuItems().subscribe({
      next: (res: any) => {
        expect(res).toEqual(menuItems);
        done();
      },
      error: done.fail,
    });
  });

  // testing getMenuItemById whether it return data
  it('should call getMenuItemById and return data', (done: DoneFn) => {
    // mocking menuItemsById data
    const menuItemsById = {
      id: 11,
      name: 'Special Eggplants Snack',
      description: 'Marinated eggplants, special sauce, greens.',
      price: 5.5,
      image: {
        small: 'assets/images/foods/appetizers/4/small.jpg',
        medium: 'assets/images/foods/appetizers/4/medium.jpg',
        big: 'assets/images/foods/appetizers/4/big.jpg',
      },
      discount: 10,
      ratingsCount: 3,
      ratingsValue: 280,
      availibilityCount: 8,
      cartCount: 0,
      weight: 120,
      isVegetarian: true,
      categoryId: 2,
    };

    httpClientSpy.get.and.returnValue(of(menuItemsById));
    service.getMenuItemById(11).subscribe({
      next: (res: any) => {
        expect(res).toEqual(menuItemsById);
        done();
      },
      error: done.fail,
    });
  });
});
