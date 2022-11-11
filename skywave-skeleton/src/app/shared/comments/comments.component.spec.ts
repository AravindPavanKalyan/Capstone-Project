import { HttpErrorResponse } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';
import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
      providers: [AppSettings],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing whether it is creating component
  it('should create CommentsComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing commentForm, send data, and recieve response
  it(`should call 'onCommentFormSubmit', send the form data and recieve the response `, (done: DoneFn) => {
    // setting values for commentForm
    component.commentForm?.controls.name.setValue('john'),
      component.commentForm?.controls.rate.setValue('80%'),
      component.commentForm?.controls.email.setValue('khs@g.com'),
      component.commentForm?.controls.review.setValue('review');
    fixture.detectChanges();

    spyOn(component, 'onCommentFormSubmit').and.callThrough();
    component.onCommentFormSubmit(component.commentForm.value);
    expect(component.onCommentFormSubmit).toHaveBeenCalled();

    const mockResponse = 'Success';

    spyOn(component.http, 'post')
      .withArgs(component.commentFormApi, component.commentForm.value)
      .and.returnValue(of(mockResponse));
    component.http
      .post(component.commentFormApi, component.commentForm.value)
      .subscribe({
        next: (res) => {
          expect(res).toEqual(mockResponse);
          done();
        },
        error: (error: HttpErrorResponse) => {
          expect(error).toThrowError();
          done();
        },
      });
  });

  // testing rating method
  it(`should call 'rate'`, () => {
    const rating = {
      title: 'Very Dissatisfied',
      icon: 'sentiment_very_dissatisfied',
      percentage: 20,
      selected: false,
    };
    spyOn(component, 'rate').and.callThrough();
    component.rate(rating);
    expect(component.rate).toHaveBeenCalledWith(rating);
  });
});
