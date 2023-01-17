import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursmentcompComponent } from './disbursmentcomp.component';

describe('DisbursmentcompComponent', () => {
  let component: DisbursmentcompComponent;
  let fixture: ComponentFixture<DisbursmentcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisbursmentcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisbursmentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
