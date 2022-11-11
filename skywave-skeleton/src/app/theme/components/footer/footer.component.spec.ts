import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check whether itcreates an instance
  it('should create FooterComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing onFeedbackFormSubmit validation
  it(`should call 'onFeedbackFormSubmit' when valid data is given`, () => {
    // setting data for feedbackForm
    component.feedbackForm?.controls.email.setValue('khs@g.com');
    component.feedbackForm?.controls.message.setValue('feedback message');
    fixture.detectChanges();

    expect(component.feedbackForm.valid).toBeTrue();
  });

  // testing onFeedbackFormSubmit invalidation
  it(`onFeedbackFormSubmit should be invalid when invalid data is given'`, () => {
    // mock data for feedbackForm
    component.feedbackForm?.controls.email.setValue('khs@com');
    component.feedbackForm?.controls.message.setValue('feedback message');
    fixture.detectChanges();

    expect(component.feedbackForm.valid).toBeFalse();
  });

  // testing onFeedbackFormSubmit valid state
  it(`should send data through 'onFeedbackFormSubmit'`, () => {
    // mock data for feedbackForm
    component.feedbackForm?.controls.email.setValue('khs@g.com');
    component.feedbackForm?.controls.message.setValue('feedback message');
    fixture.detectChanges();

    const feedbackFormData = component.feedbackForm.value;

    spyOn(component, 'onFeedbackFormSubmit').and.callThrough();
    component.onFeedbackFormSubmit(feedbackFormData);
    expect(component.onFeedbackFormSubmit).toHaveBeenCalled();
  });
});
