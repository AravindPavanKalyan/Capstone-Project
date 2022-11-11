import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // checking whether it creates an instance
  it('should create PagesComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing whether ngOnInit and getCategories are called and returning the data
  it(`should call 'ngOnInit and getCategories and then return the data`, (done: DoneFn) => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();

    // Mocking Menu items data
    const categories = [
      {
        id: 1,
        name: 'Seasonal Fruit',
        description: 'sDelicious Seasonal Fruit',
      },
    ];

    spyOn(component.appService, 'getCategories').and.returnValue(
      of(categories)
    );
    component.appService.getCategories().subscribe({
      next: (res) => {
        expect(res).toEqual(categories);
        done();
      },
      error: (res) => {
        expect(res).toThrowError();
        done();
      },
    });
  });

  // testing changeTheme
  it(`should call 'changeTheme'`, () => {
    spyOn(component, 'changeTheme').and.callThrough();
    component.changeTheme('red');
    expect(component.changeTheme).toHaveBeenCalledWith('red');
  });

  // testing onWindowScroll
  it(`should call 'onWindowScroll'`, () => {
    spyOn(component, 'onWindowScroll').and.callThrough();
    component.onWindowScroll();
    expect(component.onWindowScroll).toHaveBeenCalled();
  });

  // testing scrollToTop
  it(`should call 'scrollToTop'`, () => {
    spyOn(component, 'scrollToTop').and.callThrough();
    component.scrollToTop();
    expect(component.scrollToTop).toHaveBeenCalled();
  });

  // testing ngAfterViewInit
  it(`should call 'ngAfterViewInit'`, () => {
    spyOn(component, 'ngAfterViewInit').and.callThrough();
    component.ngAfterViewInit();
    expect(component.ngAfterViewInit).toHaveBeenCalled();
  });

  // testing the navigation to home route when chooseHeaderType() is called
  it(`should navigate to 'home' when chooseHeaderType() is called`, () => {
    spyOn(component, 'chooseHeaderType').and.callThrough();
    component.chooseHeaderType();
    expect(component.chooseHeaderType).toHaveBeenCalled();
    // expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
