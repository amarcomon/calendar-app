import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss'],
})
export class WeekDayComponent implements OnInit {
  @Input() date: string;
  @Input() events: string;

  private readonly BACKGROUND_COLOR = {
    1 : 'lightpink',
    2 : 'lightsteelblue',
    3 : 'mediumseagreen',
    4 : 'mediumturquoise',
    5 : 'sandybrown'
  }
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openModal(event) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = 'auto';
    dialogConfig.width = '350px';
    dialogConfig.data = event;

    this.matDialog.open(ModalComponent, dialogConfig);
  }

  setBackgroundColor(event) {
    return this.BACKGROUND_COLOR[event.meeting_type]
  }
}
