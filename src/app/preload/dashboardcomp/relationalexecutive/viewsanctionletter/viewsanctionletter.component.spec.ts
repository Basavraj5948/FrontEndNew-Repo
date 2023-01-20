import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsanctionletterComponent } from './viewsanctionletter.component';

describe('ViewsanctionletterComponent', () => {
  let component: ViewsanctionletterComponent;
  let fixture: ComponentFixture<ViewsanctionletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsanctionletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsanctionletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
