import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandisbursementcompComponent } from './loandisbursementcomp.component';

describe('LoandisbursementcompComponent', () => {
  let component: LoandisbursementcompComponent;
  let fixture: ComponentFixture<LoandisbursementcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandisbursementcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoandisbursementcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
