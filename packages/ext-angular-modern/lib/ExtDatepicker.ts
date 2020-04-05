//import EWCDatepicker from '../dist/ext-datepicker.component.js';
//inputs: (new EWCDatepicker()).properties,
//import EWCDatepicker from '@sencha/ext-web-components-modern/dist/ext-datepicker.component.js';
import { EWCDatepicker } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtDatepicker',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cancelButton','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','contentEl','control','controller','cover','data','dayText','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','displayed','docked','doneButton','draggable','enter','undefined','undefined','exit','undefined','flex','floated','focusableContainer','focusCls','fullscreen','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','monthText','name','nameable','nameHolder','padding','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','reveal','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','side','slotOrder','slots','standardButtons','stateful','statefulDefaults','stateId','stretchX','stretchY','style','tabIndex','tbar','title','titleAlign','titleCollapse','toFrontOnShow','toolbar','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','useTitles','value','viewModel','weight','weighted','width','x','xtype','y','yearFrom','yearText','yearTo','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','cancel','centeredchange','change','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','pick','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepickerComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDatepickerComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cancelButton','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','contentEl','control','controller','cover','data','dayText','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','displayed','docked','doneButton','draggable','enter','undefined','undefined','exit','undefined','flex','floated','focusableContainer','focusCls','fullscreen','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','monthText','name','nameable','nameHolder','padding','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','reveal','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','side','slotOrder','slots','standardButtons','stateful','statefulDefaults','stateId','stretchX','stretchY','style','tabIndex','tbar','title','titleAlign','titleCollapse','toFrontOnShow','toolbar','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','useTitles','value','viewModel','weight','weighted','width','x','xtype','y','yearFrom','yearText','yearTo','zIndex',],
            (new EWCDatepicker()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','cancel','centeredchange','change','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','pick','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'datepicker'
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

//var events = (new EWCDatepicker()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
