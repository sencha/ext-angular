declare var Ext: any;
import {Component} from '@angular/core';
import {CalendarService} from '../Calendar.service'
@Component({
  selector: 'calendar-panel-component',
  templateUrl: './CalendarPanel.html',
  styles: [``]
})
export class CalendarPanelComponent {

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/KitchenSink/CalendarFull'
    } 
   });

   constructor(private calService: CalendarService) {}

   formatDate = function(date) {
    return Ext.util.Format.date(date, 'j M');
   }

}