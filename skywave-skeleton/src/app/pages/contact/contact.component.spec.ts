import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { AppService } from 'src/app/app.service';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AppService);
    fixture.detectChanges();
  });

  // check whether it creates an instance
  it('should create a component ContactComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing onContactFormSubmit invalid state
  it(`should not valid 'onContactFormSubmit' form`, () => {
    // enter invalid input values only then , call onContactFormSubmit
    component.contactForm?.controls.name.setValue('');
    component.contactForm?.controls.phone.setValue('24234234');
    component.contactForm?.controls.email.setValue('v@com');
    component.contactForm?.controls.message.setValue('message');
    fixture.detectChanges();

    expect(component.contactForm.valid).toBeFalse();
  });

  // testing onContactFormSubmit method when emptyform fields are given
  it(`should return error message when empty form is submitted 'onContactFormSubmit'`, () => {
    // enter valid input values only then , call onContactFormSubmit
    component.contactForm?.controls.name.setValue('');
    component.contactForm?.controls.phone.setValue('');
    component.contactForm?.controls.email.setValue('');
    component.contactForm?.controls.message.setValue('');

    fixture.detectChanges(); // you must detect changes only then submit btn will be enabled

    spyOn(component, 'onContactFormSubmit').and.callThrough();
    component.onContactFormSubmit();
    expect(component.onContactFormSubmit).toHaveBeenCalled();

    spyOn(component.appService, 'postMessage')
      .withArgs(component.contactForm.value)
      .and.throwError('Invalid Input');
    expect(function() {
      component.appService.postMessage(component.contactForm.value);
    }).toThrow(new Error('Invalid Input'));
  });

  // testing onContactFormSubmit method when form is valid and recieve mockData
  it(`should call 'onContactFormSubmit' with proper data and receive mock data`, (done: DoneFn) => {
    // enter valid input values only then , call onContactFormSubmit
    component.contactForm?.controls.name.setValue('Virat Kohli');
    component.contactForm?.controls.phone.setValue('24234234');
    component.contactForm?.controls.email.setValue('v@k.com');
    component.contactForm?.controls.message.setValue('message');

    fixture.detectChanges(); // you must detect changes only then submit btn will be enabled

    spyOn(component, 'onContactFormSubmit').and.callThrough();
    component.onContactFormSubmit();
    expect(component.onContactFormSubmit).toHaveBeenCalled();

    const mockResponse = {
      name: 'Virat Kohli',
      phone: '24234234',
      email: 'v@k.com',
      message: 'message',
    };

    spyOn(component.appService, 'postMessage')
      .withArgs(component.contactForm.value)
      .and.returnValue(of(mockResponse));
    component.appService.postMessage(component.contactForm.value).subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED.');
        done();
      },
    });
  });
});
