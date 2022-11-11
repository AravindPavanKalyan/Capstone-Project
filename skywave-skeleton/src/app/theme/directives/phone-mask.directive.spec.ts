import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneMaskDirective } from './phone-mask.directive';

// 1. create a mock component with appHighlight in its html
@Component({
  template: `
    <input id="withoutAppPhoneMask" value="1234567890" />
    <input id="withAppPhoneMask" appPhoneMask value="1234567890" />
  `,
})
class MockComponent {} // No need to export as we will use this component here itself

// 2. test whether the div in the above mock component is getting bg color
describe('PhoneMaskDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  // step 2.1 preparing Mockcomponent for testing - loading it into the testing
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MockComponent, PhoneMaskDirective],
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp
  });

  // testing the positive case of appPhoneMask directive
  it(`should check whethere the input field is like phone`, () => {
    const inputEl = fixture.nativeElement.querySelector('#withAppPhoneMask');
    expect(inputEl.value).toEqual('(123) 456-7890');
  });

  // testing the negative case of appPhoneMask directive
  it(`should check whethere the input field is like phone`, () => {
    const inputEl = fixture.nativeElement.querySelector('#withoutAppPhoneMask');
    expect(inputEl.value).toEqual('1234567890');
  });
});
