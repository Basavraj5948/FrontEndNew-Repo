import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapprovedsanctionletterComponent } from './viewapprovedsanctionletter.component';

describe('ViewapprovedsanctionletterComponent', () => {
  let component: ViewapprovedsanctionletterComponent;
  let fixture: ComponentFixture<ViewapprovedsanctionletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapprovedsanctionletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewapprovedsanctionletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
