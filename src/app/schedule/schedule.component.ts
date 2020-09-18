import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Schedule } from '../models/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule;
  today = new Date();
  day = new Date();
  yesterday = new Date(this.day.getFullYear(), this.day.getMonth(),
    this.day.getDate() - 1);
  dpDate: Date = new Date();

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getSchedule('?startDate=' + this.yesterday.toLocaleDateString('en-CA'),
      '&endDate=' + this.day.toLocaleDateString('en-CA')
    );
  }

  getSchedule(startDate: string, endDate: string): void  {
    this.api.getSchedule(startDate, endDate).subscribe((data: Schedule) => {
      this.schedule = {...data};
    });
  }

  changeDate(date: Date): void {
    delete this.schedule.dates;
    this.dpDate = new Date(date);
    const startDate = new Date(this.dpDate.getFullYear(),
      this.dpDate.getMonth(), this.dpDate.getDate() - 1);
    const startDateString: string = '?startDate=' +
      startDate.toLocaleDateString('en-CA');
    const endDate: string = '&endDate=' + date.toLocaleDateString('en-CA');
    this.getSchedule(startDateString, endDate);
  }

}
