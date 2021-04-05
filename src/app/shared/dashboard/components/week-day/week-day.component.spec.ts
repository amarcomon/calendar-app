import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import { WeekDayComponent } from './week-day.component';

describe('WeekDayComponent', () => {
  let component: WeekDayComponent;
  let fixture: ComponentFixture<WeekDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeekDayComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
