import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcompComponent } from './contactcomp.component';

describe('ContactcompComponent', () => {
  let component: ContactcompComponent;
  let fixture: ComponentFixture<ContactcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
