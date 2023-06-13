import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  viewDate: Date = new Date()

  view:CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

  setView(view:CalendarView){
    this.view = view
  }
}
