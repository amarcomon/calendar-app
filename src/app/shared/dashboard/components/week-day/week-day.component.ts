import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss'],
})
export class WeekDayComponent implements OnInit {
  @Input() date: string;
  @Input() events: string;

  constructor() {}

  ngOnInit(): void {}
}
