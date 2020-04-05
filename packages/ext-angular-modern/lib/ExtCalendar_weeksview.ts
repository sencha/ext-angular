//import EWCCalendar_weeksview from '../dist/ext-calendar-weeksview.component.js';
//inputs: (new EWCCalendar_weeksview()).properties,
//import EWCCalendar_weeksview from '@sencha/ext-web-components-modern/dist/ext-calendar-weeksview.component.js';
import { EWCCalendar_weeksview } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtCalendar_weeksview',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','addOnSelect','alignSelf','allowSelection','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','compact','compactOptions','constrainAlign','contentEl','controller','controlStoreRange','data','dayFormat','defaultListenerScope','disabled','displayed','docked','draggable','droppable','editForm','undefined','eventDefaults','undefined','undefined','firstDayOfWeek','flex','floated','focusCls','fullscreen','gestureNavigation','header','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','overflowText','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showOverflow','stateful','statefulDefaults','stateId','store','style','tabIndex','timezoneOffset','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','visibleDays','visibleWeeks','weekendDays','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','eventadd','eventdrop','eventedit','eventtap','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','select','selectrange','show','tofront','topchange','updatedata','validateeventadd','validateeventdrop','validateeventedit','valuechange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weeksviewComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_weeksviewComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','addOnSelect','alignSelf','allowSelection','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','compact','compactOptions','constrainAlign','contentEl','controller','controlStoreRange','data','dayFormat','defaultListenerScope','disabled','displayed','docked','draggable','droppable','editForm','undefined','eventDefaults','undefined','undefined','firstDayOfWeek','flex','floated','focusCls','fullscreen','gestureNavigation','header','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','overflowText','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showOverflow','stateful','statefulDefaults','stateId','store','style','tabIndex','timezoneOffset','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','visibleDays','visibleWeeks','weekendDays','weight','width','x','xtype','y','zIndex',],
            (new EWCCalendar_weeksview()).events,
            ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','eventadd','eventdrop','eventedit','eventtap','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','select','selectrange','show','tofront','topchange','updatedata','validateeventadd','validateeventdrop','validateeventedit','valuechange','widthchange',],
            vc
        )
        this.xtype = 'calendar-weeksview'
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

//var events = (new EWCCalendar_weeksview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
