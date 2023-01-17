import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalculatorcompComponent } from './emicalculatorcomp.component';

describe('EmicalculatorcompComponent', () => {
  let component: EmicalculatorcompComponent;
  let fixture: ComponentFixture<EmicalculatorcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmicalculatorcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmicalculatorcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
