import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertoahComponent } from './transfertoah.component';

describe('TransfertoahComponent', () => {
  let component: TransfertoahComponent;
  let fixture: ComponentFixture<TransfertoahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertoahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfertoahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
