import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { HeaderImageComponent } from './header-image.component';

describe('HomeComponent', () => {
  let component: HeaderImageComponent;
  let fixture: ComponentFixture<HeaderImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderImageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing component creation
  it('should create HeaderImageComponent', () => {
    expect(component).toBeTruthy();
  });
});
