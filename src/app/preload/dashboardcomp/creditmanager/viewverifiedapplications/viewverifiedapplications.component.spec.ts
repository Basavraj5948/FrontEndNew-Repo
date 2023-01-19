import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewverifiedapplicationsComponent } from './viewverifiedapplications.component';

describe('ViewverifiedapplicationsComponent', () => {
  let component: ViewverifiedapplicationsComponent;
  let fixture: ComponentFixture<ViewverifiedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewverifiedapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewverifiedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
