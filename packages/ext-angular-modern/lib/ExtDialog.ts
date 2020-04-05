//import EWCDialog from '../dist/ext-dialog.component.js';
//inputs: (new EWCDialog()).properties,
//import EWCDialog from '@sencha/ext-web-components-modern/dist/ext-dialog.component.js';
import { EWCDialog } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtDialog',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','constrainDrag','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','dismissAction','dismissHandler','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maskTapHandler','maxHeight','maximizable','maximizeAnimation','maximized','maximizeProxy','maximizeTool','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','restorable','restoreAnimation','restoreTool','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','standardButtons','stateful','statefulDefaults','stateId','style','tabIndex','tbar','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaximize','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerestore','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maximize','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','restore','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDialogComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDialogComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','constrainAlign','constrainDrag','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','disabled','dismissAction','dismissHandler','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','header','headerPosition','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','listeners','manageBorders','margin','masked','maskTapHandler','maxHeight','maximizable','maximizeAnimation','maximized','maximizeProxy','maximizeTool','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','rbar','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizable','restorable','restoreAnimation','restoreTool','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','standardButtons','stateful','statefulDefaults','stateId','style','tabIndex','tbar','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCDialog()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaximize','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerestore','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maximize','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','restore','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'dialog'
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

//var events = (new EWCDialog()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
