import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilrejectedComponent } from './cibilrejected.component';

describe('CibilrejectedComponent', () => {
  let component: CibilrejectedComponent;
  let fixture: ComponentFixture<CibilrejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilrejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CibilrejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
