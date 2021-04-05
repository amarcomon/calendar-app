import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  private readonly BACKGROUND_COLOR = {
    1 : 'lightpink',
    2 : 'lightsteelblue',
    3 : 'mediumseagreen',
    4 : 'mediumturquoise',
    5 : 'sandybrown'
  }

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  
  closeModal() {
    this.dialogRef.close();
  }

  setBackgroundColor() {
    return this.BACKGROUND_COLOR[this.data.meeting_type]
  }
}