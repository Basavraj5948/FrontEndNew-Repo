import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicantformComponent } from './viewapplicantform.component';

describe('ViewapplicantformComponent', () => {
  let component: ViewapplicantformComponent;
  let fixture: ComponentFixture<ViewapplicantformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapplicantformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewapplicantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
