import { Component, OnInit } from '@angular/core';
import { WEEK_DATA } from './dashboard.constants'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  week: {}
  monthPeriod = '< 15 de marzo - 21 de marzo >'

  constructor() { }

  ngOnInit(): void {
    this.week = WEEK_DATA
  }

}
