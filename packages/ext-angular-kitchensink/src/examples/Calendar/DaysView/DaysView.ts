declare var Ext: any;
import {Component} from '@angular/core';
import {CalendarService} from '../Calendar.service';
@Component({
  selector: 'calendar-daysview-component',
  templateUrl: './DaysView.html',
  styles: [``]
})
export class CalendarDaysViewComponent {

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/CalendarDays'
    }
  })

  panelTitle =  Ext.Date.format(new Date(), 'F Y');
  calendarDaysValue = new Date();

  constructor(private calService: CalendarService) {}

}