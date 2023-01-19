import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratesanctionletterComponent } from './generatesanctionletter.component';

describe('GeneratesanctionletterComponent', () => {
  let component: GeneratesanctionletterComponent;
  let fixture: ComponentFixture<GeneratesanctionletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratesanctionletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratesanctionletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
