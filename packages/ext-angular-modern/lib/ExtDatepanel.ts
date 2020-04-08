//import EWCDatepanel from '../dist/ext-datepanel.component.js';
//inputs: (new EWCDatepanel()).properties,
//import EWCDatepanel from '@sencha/ext-web-components-modern/dist/ext-datepanel.component.js';
import { EWCDatepanel } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtDatepanel',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoConfirm','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','captionFormat','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','contentEl','control','controller','data','dateCellFormat','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','disabledDates','disabledDays','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusableDate','focusCls','format','fullscreen','handler','header','headerFormat','headerLength','headerPosition','height','hidden','hideAnimation','hideCaptions','hideMode','hideOnMaskTap','hideOutside','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxDate','maxHeight','maxWidth','minButtonWidth','minDate','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','navigationPosition','nextText','padding','panes','plugins','prevText','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','right','ripple','scope','scrollable','selectOnNavigate','session','shadow','shareableName','shim','showAfterMaxDate','showAnimation','showBeforeMinDate','showFooter','showTodayButton','specialDates','specialDays','splitTitle','standardButtons','startDay','stateful','statefulDefaults','stateId','style','tabIndex','tbar','title','titleAlign','titleAnimation','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','transformCellCls','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weekendDays','weight','weighted','width','x','xtype','y','yearPicker','yearPickerDefaults','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepanelComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDatepanelComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoConfirm','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','captionFormat','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','contentEl','control','controller','data','dateCellFormat','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','disabledDates','disabledDays','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusableDate','focusCls','format','fullscreen','handler','header','headerFormat','headerLength','headerPosition','height','hidden','hideAnimation','hideCaptions','hideMode','hideOnMaskTap','hideOutside','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxDate','maxHeight','maxWidth','minButtonWidth','minDate','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','navigationPosition','nextText','padding','panes','plugins','prevText','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','right','ripple','scope','scrollable','selectOnNavigate','session','shadow','shareableName','shim','showAfterMaxDate','showAnimation','showBeforeMinDate','showFooter','showTodayButton','specialDates','specialDays','splitTitle','standardButtons','startDay','stateful','statefulDefaults','stateId','style','tabIndex','tbar','title','titleAlign','titleAnimation','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','transformCellCls','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weekendDays','weight','weighted','width','x','xtype','y','yearPicker','yearPickerDefaults','zIndex',],
            (new EWCDatepanel()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'datepanel'
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

//var events = (new EWCDatepanel()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
