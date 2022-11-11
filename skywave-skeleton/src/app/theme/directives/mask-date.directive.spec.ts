import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaskDateDirective } from './mask-date.directive';

// 1. create a mock component with appHighlight in its html
@Component({
  template: `
    <input id="withoutAppMaskDate" value="02-12-1996" />
    <input id="withAppMaskDate" appMaskDate value="02-12-1996" />
  `,
})
class MockComponent {} // No need to export as we will use this component here itself

// 2. test whether the div in the above mock component is getting bg color
describe('MaskDateDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  // step 2.1 preparing Mockcomponent for testing - loading it into the testing
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MockComponent, MaskDateDirective],
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp
  });

  // testing the positive case of appMaskDate directive
  it(`should check whethere the input field takes date in 'dd/mm/yyyy'`, () => {
    const inputEl = fixture.nativeElement.querySelector('#withAppMaskDate');
    expect(inputEl.value).toEqual('02/12/1996');
  });

  // testing the negative case of appMaskDate directive
  it(`should check whethere the input field doesn't takes date in 'dd/mm/yyyy'`, () => {
    const inputEl = fixture.nativeElement.querySelector('#withoutAppMaskDate');
    expect(inputEl.value).toEqual('02-12-1996');
  });
});
