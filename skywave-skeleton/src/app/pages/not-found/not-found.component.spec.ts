import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  // setting up routerSpy
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule, RouterTestingModule],
      providers: [AppSettings, { provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check whether itcreates an instance
  it('should create NotFoundComponent', () => {
    expect(component).toBeTruthy();
  });

  // checking whether goHome navigates to home page or not
  it(`should call 'goHome'`, () => {
    component.goHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
