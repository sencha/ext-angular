import {
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class calendar_multiviewMetaData {
  public static XTYPE: string = 'calendar-multiview';
  public static PROPERTIESOBJECT: any = {
    "compact": "Boolean",
    "compactOptions": "Object",
    "defaultView": "String",
    "layout": "Object/String",
    "store": "Object/Ext.calendar.store.Calendars",
    "timezoneOffset": "Number",
    "value": "Date",
    "views": "Object",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'compact',
    'compactOptions',
    'defaultView',
    'layout',
    'store',
    'timezoneOffset',
    'value',
    'views',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: 'calendar-multiview', 
  inputs: calendar_multiviewMetaData.PROPERTIES,
  outputs: calendar_multiviewMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_multiviewComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_multiviewComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_multiviewMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_multiviewMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {this.baseAfterContentInit()}
}