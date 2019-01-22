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
        console.log("calendarDayReady is ready");
        this.calendarDay = event.ext;
    }

    onBeforeDragStart = (calendarday,context) => {
        console.log("In onBeforeDragStart");
        var notAllowed = ['Not draggable', 'Not draggable/resizable'];
        var contains = !Ext.Array.contains(notAllowed, context.event.data.title);
        console.log("onBeforeDragStart. Returning : " + contains);
        calendarday.setDraggable(contains);
        return contains;
    }



    onBeforeResizeStart = (calendarday,context) => {
        console.log("In onBeforeResizeStart");
        var notAllowed = ['Not resizable', 'Not draggable/resizable'];
        var contains = !Ext.Array.contains(notAllowed, context.event.data.title);
        console.log("onBeforeResizeStart. Returning : " + contains);
        calendarday.resizeEvents = contains;
        return contains;
    }

    confirmAction = (calendarday,context) => {
        console.log("In confirmAction");
        
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

  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
  }

}