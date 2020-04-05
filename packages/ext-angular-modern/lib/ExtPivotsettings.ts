//import EWCPivotsettings from '../dist/ext-pivotsettings.component.js';
//inputs: (new EWCPivotsettings()).properties,
//import EWCPivotsettings from '@sencha/ext-web-components-modern/dist/ext-pivotsettings.component.js';
import { EWCPivotsettings } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtPivotsettings',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','api','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','baseParams','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','bubbleDirty','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','dirty','disabled','displayed','docked','draggable','enableSubmissionForm','enctype','undefined','undefined','undefined','fieldDefaults','fieldSeparators','flex','floated','focusableContainer','focusCls','fullscreen','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','inputBorders','instanceCls','itemId','items','jsonSubmit','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','method','minButtonWidth','minHeight','minWidth','modal','modelValidation','multipartDetection','name','nameable','nameHolder','padding','paramOrder','paramsAsHash','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','standardButtons','standardSubmit','stateful','statefulDefaults','stateId','style','submitOnAction','tabIndex','tbar','timeout','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','trackResetOnLoad','translatable','twoWayBindable','ui','url','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforesubmit','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','dirtychange','disabledchange','dockedchange','drawerhide','drawershow','erased','exception','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','submit','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotsettingsComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtPivotsettingsComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','api','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','baseParams','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','bubbleDirty','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','dirty','disabled','displayed','docked','draggable','enableSubmissionForm','enctype','undefined','undefined','undefined','fieldDefaults','fieldSeparators','flex','floated','focusableContainer','focusCls','fullscreen','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','inputBorders','instanceCls','itemId','items','jsonSubmit','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','method','minButtonWidth','minHeight','minWidth','modal','modelValidation','multipartDetection','name','nameable','nameHolder','padding','paramOrder','paramsAsHash','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','standardButtons','standardSubmit','stateful','statefulDefaults','stateId','style','submitOnAction','tabIndex','tbar','timeout','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','trackResetOnLoad','translatable','twoWayBindable','ui','url','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCPivotsettings()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforesubmit','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','dirtychange','disabledchange','dockedchange','drawerhide','drawershow','erased','exception','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','submit','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'pivotsettings'
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

//var events = (new EWCPivotsettings()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
