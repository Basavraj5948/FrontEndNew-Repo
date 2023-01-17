import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilapprovedComponent } from './cibilapproved.component';

describe('CibilapprovedComponent', () => {
  let component: CibilapprovedComponent;
  let fixture: ComponentFixture<CibilapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilapprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CibilapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
