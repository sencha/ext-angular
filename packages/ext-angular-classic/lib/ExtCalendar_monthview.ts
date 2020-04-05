//import EWCCalendar_monthview from '../dist/ext-calendar-monthview.component.js';
//inputs: (new EWCCalendar_monthview()).properties,
//import EWCCalendar_monthview from '@sencha/ext-web-components-classic/dist/ext-calendar-monthview.component.js';
import { EWCCalendar_monthview } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCalendar_monthview',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','addOnSelect','allowSelection','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','compact','compactOptions','controller','controlStoreRange','dayFormat','defaultListenerScope','disabled','draggable','droppable','editForm','eventDefaults','undefined','firstDayOfWeek','focusCls','gestureNavigation','header','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','overflowText','plugins','publishes','reference','renderTo','ripple','session','shareableName','showOverflow','store','style','timezoneOffset','touchAction','twoWayBindable','ui','userCls','value','viewModel','visibleDays','visibleWeeks','weekendDays','width',],
    outputs: ['ready','created','beforedisabledchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','eventadd','eventdrop','eventedit','eventtap','focus','focusenter','focusleave','heightchange','hiddenchange','select','selectrange','validateeventadd','validateeventdrop','validateeventedit','valuechange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_monthviewComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_monthviewComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','addOnSelect','allowSelection','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','compact','compactOptions','controller','controlStoreRange','dayFormat','defaultListenerScope','disabled','draggable','droppable','editForm','eventDefaults','undefined','firstDayOfWeek','focusCls','gestureNavigation','header','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','overflowText','plugins','publishes','reference','renderTo','ripple','session','shareableName','showOverflow','store','style','timezoneOffset','touchAction','twoWayBindable','ui','userCls','value','viewModel','visibleDays','visibleWeeks','weekendDays','width',],
            (new EWCCalendar_monthview()).events,
            ['ready','created','beforedisabledchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','eventadd','eventdrop','eventedit','eventtap','focus','focusenter','focusleave','heightchange','hiddenchange','select','selectrange','validateeventadd','validateeventdrop','validateeventedit','valuechange','widthchange',],
            vc
        )
        this.xtype = 'calendar-monthview'
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

//var events = (new EWCCalendar_monthview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
