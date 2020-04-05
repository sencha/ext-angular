//import EWCLockedgrid from '../dist/ext-lockedgrid.component.js';
//inputs: (new EWCLockedgrid()).properties,
//import EWCLockedgrid from '@sencha/ext-web-components-modern/dist/ext-lockedgrid.component.js';
import { EWCLockedgrid } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtLockedgrid',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','columnMenu','columns','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaultLockedRegion','defaults','defaultToolWeights','defaultType','disabled','displayed','docked','draggable','enableColumnMove','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','gridDefaults','grouped','header','headerPosition','height','hidden','hideAnimation','hideHeaders','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemConfig','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','leftGridDefaults','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','rbar','record','reference','referenceHolder','regions','relative','renderTo','resetFocusPosition','resizable','right','rightGridDefaults','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','standardButtons','stateful','statefulDefaults','stateId','store','style','tabIndex','tbar','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','variableHeights','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLockedgridComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtLockedgridComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorPosition','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bottom','buttonAlign','buttons','buttonToolbar','cardSwitchAnimation','centered','closable','closeAction','closeToolText','cls','collapsed','collapsible','columnMenu','columns','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaultLockedRegion','defaults','defaultToolWeights','defaultType','disabled','displayed','docked','draggable','enableColumnMove','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','gridDefaults','grouped','header','headerPosition','height','hidden','hideAnimation','hideHeaders','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerCls','instanceCls','itemConfig','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','left','leftGridDefaults','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','rbar','record','reference','referenceHolder','regions','relative','renderTo','resetFocusPosition','resizable','right','rightGridDefaults','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','standardButtons','stateful','statefulDefaults','stateId','store','style','tabIndex','tbar','title','titleAlign','titleCollapse','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','variableHeights','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCLockedgrid()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecollapse','beforedisabledchange','beforedockedchange','beforeexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforeresizedragstart','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','collapse','deactivate','destroy','disabledchange','dockedchange','drawerhide','drawershow','erased','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','resizedrag','resizedragcancel','resizedragend','resizedragstart','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'lockedgrid'
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

//var events = (new EWCLockedgrid()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
