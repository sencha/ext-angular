declare var Ext: any;
import {Component} from '@angular/core';
import {CalendarService} from '../Calendar.service';
@Component({
  selector: 'calendar-gradresizeval-component',
  templateUrl: './DragResizeValidation.html',
  styles: [``]
})
export class CalendarDragResizeValidationComponent {

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/CalendarValidation'
    }
  })

  calendarDay: any;
  calendarDayReady = (event) => {
    this.calendarDay = event.cmp;
  }

  onBeforeDragStart = (calendarday,context) => {
    var notAllowed = ['Not draggable', 'Not draggable/resizable'];
    var contains = !Ext.Array.contains(notAllowed, context.event.data.title);
    return contains;
  }

  onBeforeResizeStart = (calendarday,context) => {
    var notAllowed = ['Not resizable', 'Not draggable/resizable'];
    var contains = !Ext.Array.contains(notAllowed, context.event.data.title);
    return contains;
  }

  confirmAction = (calendarday,context) => {
    context.validate = context.validate.then(function () {
      return new Ext.Promise(function (resolve, reject) {
        Ext.Msg.confirm('Are you sure', 'Allow the action to go ahead?', function (btn) {
          resolve(btn === 'yes');
        });
      });
    });
  }

  myCalListeners = {
    beforeeventdragstart : this.onBeforeDragStart,
    beforeeventresizestart: this.onBeforeResizeStart,
    validateeventdrop: this.confirmAction,
    validateeventresize : this.confirmAction,
    validateeventerase: this.confirmAction
  }

  calDayValue = new Date();

  constructor(private calService: CalendarService) {}

}