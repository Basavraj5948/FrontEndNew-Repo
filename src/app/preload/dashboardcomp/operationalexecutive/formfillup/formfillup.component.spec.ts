import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfillupComponent } from './formfillup.component';

describe('FormfillupComponent', () => {
  let component: FormfillupComponent;
  let fixture: ComponentFixture<FormfillupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfillupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfillupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
