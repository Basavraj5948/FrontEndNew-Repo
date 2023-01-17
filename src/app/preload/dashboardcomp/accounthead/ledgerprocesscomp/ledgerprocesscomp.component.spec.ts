import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerprocesscompComponent } from './ledgerprocesscomp.component';

describe('LedgerprocesscompComponent', () => {
  let component: LedgerprocesscompComponent;
  let fixture: ComponentFixture<LedgerprocesscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerprocesscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerprocesscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
