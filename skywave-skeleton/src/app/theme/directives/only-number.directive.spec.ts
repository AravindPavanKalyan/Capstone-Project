// import { Component, DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { OnlyNumberDirective } from './only-number.directive';

// // 1. create a mock component with OnlyNumberDirective in its html
// @Component({
//   template: `
//   <input appOnlyNumber value="0987654321">
//   `,
// })
// class MockComponent {} // No need to export as we will use this component here itself

// // 2. test whether the div in the above mock component is getting bg color
// describe('OnlyNumberDirective', () => {
//   let fixture: ComponentFixture<MockComponent>;
//   let component: any;
//   let onlyNumberEl: DebugElement[];

//   //step 2.1 preparing Mockcomponent for testing - loading it into the testing
//   beforeEach(() => {
//     fixture = TestBed.configureTestingModule({
//       declarations: [MockComponent, OnlyNumberDirective],
//     }).createComponent(MockComponent);

//     fixture.detectChanges(); // detecting the changes in html of mockcomp

//     component = fixture.componentInstance;
//     onlyNumberEl = fixture.debugElement.queryAll(
//       By.directive(OnlyNumberDirective)
//     );
//   });

//   it("should have a <input> in this phone number format", () => {
//     const inputEl = fixture.debugElement.nativeElement.querySelector("input");
//     const event = new Event("keypress");
//     spyOn(event, "preventDefault");
//     inputEl.dispatchEvent(event);
//     fixture.detectChanges();
//     expect(event.preventDefault).toHaveBeenCalled();
//   });

//   it("should prevent keypress event", () => {
//     const inputEl = fixture.debugElement.nativeElement.querySelector("input");
//     const event = new KeyboardEvent("keypress", {
//       key: ".",
//       cancelable: true,
//     });
//     inputEl.dispatchEvent(event);
//     expect(event.defaultPrevented).toBeTruthy();
//   });

// });
