//import EWCCalendar_weekview from '../dist/ext-calendar-weekview.component.js';
//inputs: (new EWCCalendar_weekview()).properties,
//import EWCCalendar_weekview from '@sencha/ext-web-components-classic/dist/ext-calendar-weekview.component.js';
import { EWCCalendar_weekview } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'ExtCalendar_weekview',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','allowSelection','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','compact','compactOptions','controller','controlStoreRange','defaultListenerScope','disabled','displayOverlap','draggable','droppable','editForm','endTime','eventDefaults','undefined','firstDayOfWeek','focusCls','gestureNavigation','header','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','reference','renderTo','resizeEvents','ripple','session','shareableName','showNowMarker','startTime','store','style','timeFormat','timeRenderer','timezoneOffset','touchAction','twoWayBindable','ui','userCls','value','viewModel','visibleDays','width',],
    outputs: ['ready','created','beforedisabledchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeeventresizestart','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','eventadd','eventdrop','eventedit','eventresize','eventtap','focus','focusenter','focusleave','heightchange','hiddenchange','validateeventadd','validateeventdrop','validateeventedit','validateeventresize','valuechange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weekviewComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_weekviewComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','allowSelection','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','compact','compactOptions','controller','controlStoreRange','defaultListenerScope','disabled','displayOverlap','draggable','droppable','editForm','endTime','eventDefaults','undefined','firstDayOfWeek','focusCls','gestureNavigation','header','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','reference','renderTo','resizeEvents','ripple','session','shareableName','showNowMarker','startTime','store','style','timeFormat','timeRenderer','timezoneOffset','touchAction','twoWayBindable','ui','userCls','value','viewModel','visibleDays','width',],
            (new EWCCalendar_weekview()).events,
            ['ready','created','beforedisabledchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeeventresizestart','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','eventadd','eventdrop','eventedit','eventresize','eventtap','focus','focusenter','focusleave','heightchange','hiddenchange','validateeventadd','validateeventdrop','validateeventedit','validateeventresize','valuechange','widthchange',],
            vc
        )
        this.xtype = 'calendar-weekview'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCCalendar_weekview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
