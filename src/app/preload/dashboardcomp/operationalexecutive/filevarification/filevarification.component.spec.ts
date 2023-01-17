import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilevarificationComponent } from './filevarification.component';

describe('FilevarificationComponent', () => {
  let component: FilevarificationComponent;
  let fixture: ComponentFixture<FilevarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilevarificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilevarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
