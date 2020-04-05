//import EWCCalendar_weeks from '../dist/ext-calendar-weeks.component.js';
//inputs: (new EWCCalendar_weeks()).properties,
//import EWCCalendar_weeks from '@sencha/ext-web-components-modern/dist/ext-calendar-weeks.component.js';
import { EWCCalendar_weeks } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtCalendar_weeks',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','addForm','addOnSelect','alignSelf','allowFocusingDisabledChildren','allowSelection','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','compact','compactOptions','constrainAlign','contentEl','control','controller','controlStoreRange','data','dayFormat','dayHeader','dayHeaderFormat','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','displayed','docked','draggable','droppable','editForm','undefined','eventDefaults','undefined','eventRelayers','undefined','firstDayOfWeek','flex','floated','focusableContainer','focusCls','fullscreen','gestureNavigation','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightToday','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','overflowText','padding','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showOverflow','standardButtons','stateful','statefulDefaults','stateId','store','style','tabIndex','tbar','timezoneOffset','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','view','viewModel','visibleDays','visibleWeeks','weekendDays','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','eventadd','eventdrop','eventedit','eventtap','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','validateeventadd','validateeventdrop','validateeventedit','valuechange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weeksComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_weeksComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','addForm','addOnSelect','alignSelf','allowFocusingDisabledChildren','allowSelection','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','compact','compactOptions','constrainAlign','contentEl','control','controller','controlStoreRange','data','dayFormat','dayHeader','dayHeaderFormat','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','displayed','docked','draggable','droppable','editForm','undefined','eventDefaults','undefined','eventRelayers','undefined','firstDayOfWeek','flex','floated','focusableContainer','focusCls','fullscreen','gestureNavigation','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightToday','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','overflowText','padding','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showOverflow','standardButtons','stateful','statefulDefaults','stateId','store','style','tabIndex','tbar','timezoneOffset','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','view','viewModel','visibleDays','visibleWeeks','weekendDays','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCCalendar_weeks()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','eventadd','eventdrop','eventedit','eventtap','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','validateeventadd','validateeventdrop','validateeventedit','valuechange','widthchange',],
            vc
        )
        this.xtype = 'calendar-weeks'
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

//var events = (new EWCCalendar_weeks()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
