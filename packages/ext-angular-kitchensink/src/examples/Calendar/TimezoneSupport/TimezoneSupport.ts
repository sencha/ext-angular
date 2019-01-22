declare var Ext: any;
import {Component} from '@angular/core';
import {CalendarService} from '../Calendar.service';
@Component({
  selector: 'calendar-timezonesupport-component',
  templateUrl: './TimezoneSupport.html',
  styles: [``]
})
export class CalendarTimezoneSupportComponent {

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'/KitchenSink/CalendarTimezone'
    }
  })

  timezoneOffset = 0;
  calDayValue = new Date();
  panelTitle = Ext.Date.format(new Date(),'F Y');
  isPhone: boolean;

  changeOptions = () => {
    const selectorValue = Ext.getCmp('selector').getSelection().data.value;
    this.timezoneOffset = selectorValue;
  }


  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
      this.isPhone = Ext.os.is.Phone;
      console.log("isphone: " + Ext.os.is.Phone + " isPhone: " + this.isPhone);
      console.log("isDesktop: " + Ext.os.is.Desktop);
  }

}