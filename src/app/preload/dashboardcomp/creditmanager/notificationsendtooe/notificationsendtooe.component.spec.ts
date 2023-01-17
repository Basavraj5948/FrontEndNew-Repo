import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsendtooeComponent } from './notificationsendtooe.component';

describe('NotificationsendtooeComponent', () => {
  let component: NotificationsendtooeComponent;
  let fixture: ComponentFixture<NotificationsendtooeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsendtooeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsendtooeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
