import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MatMenuTrigger } from '@angular/material/menu';
import { HorizontalMenuComponent } from './horizontal-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HorizontalMenuComponent', () => {
  let component: HorizontalMenuComponent;
  let fixture: ComponentFixture<HorizontalMenuComponent>;
  let trigger: MatMenuTrigger;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalMenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check whether it creates an instance
  it('should create HorizontalMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing closeOthers method
  it(`should call 'closeOthers'`, () => {
    spyOn(component, 'closeOthers').and.callThrough();
    component.closeOthers(trigger);
    expect(component.closeOthers).toHaveBeenCalled();
  });
});
