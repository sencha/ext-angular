//import EWCCalendar_month from '../dist/ext-calendar-month.component.js';
//inputs: (new EWCCalendar_month()).properties,
//import EWCCalendar_month from '@sencha/ext-web-components-classic/dist/ext-calendar-month.component.js';
import { EWCCalendar_month } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCalendar_month',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','addForm','addOnSelect','alignOnScroll','alignTarget','allowFocusingDisabledChildren','allowSelection','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','compact','compactOptions','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','controlStoreRange','data','dayFormat','dayHeader','dayHeaderFormat','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','droppable','editForm','eventDefaults','eventRelayers','expandToolText','fbar','firstDayOfWeek','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','gestureNavigation','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','highlightToday','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','overflowText','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','showOverflow','shrinkWrap','shrinkWrapDock','simpleDrag','stateEvents','stateful','stateId','store','style','suspendLayout','tabGuard','tabIndex','tbar','timezoneOffset','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','view','viewModel','visibleDays','visibleWeeks','weekendDays','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','eventadd','eventdrop','eventedit','eventtap','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat','validateeventadd','validateeventdrop','validateeventedit','valuechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_monthComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_monthComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','addForm','addOnSelect','alignOnScroll','alignTarget','allowFocusingDisabledChildren','allowSelection','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','compact','compactOptions','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','controlStoreRange','data','dayFormat','dayHeader','dayHeaderFormat','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','droppable','editForm','eventDefaults','eventRelayers','expandToolText','fbar','firstDayOfWeek','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','gestureNavigation','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','highlightToday','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','overflowText','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','showOverflow','shrinkWrap','shrinkWrapDock','simpleDrag','stateEvents','stateful','stateId','store','style','suspendLayout','tabGuard','tabIndex','tbar','timezoneOffset','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','view','viewModel','visibleDays','visibleWeeks','weekendDays','weight','width','xtype',],
            (new EWCCalendar_month()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','eventadd','eventdrop','eventedit','eventtap','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat','validateeventadd','validateeventdrop','validateeventedit','valuechange',],
            vc
        )
        this.xtype = 'calendar-month'
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

//var events = (new EWCCalendar_month()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
