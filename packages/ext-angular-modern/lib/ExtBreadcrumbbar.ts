//import EWCBreadcrumbbar from '../dist/ext-breadcrumbbar.component.js';
//inputs: (new EWCBreadcrumbbar()).properties,
//import EWCBreadcrumbbar from '@sencha/ext-web-components-modern/dist/ext-breadcrumbbar.component.js';
import { EWCBreadcrumbbar } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtBreadcrumbbar',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','btnCls','buttonConfig','buttonUI','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultButtonUI','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','displayField','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','menu','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','selection','session','shadow','shareableName','shim','showAnimation','showIcons','showMenuIcons','stateful','statefulDefaults','stateId','store','style','tabIndex','title','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','useSplitButtons','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','selectionchange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtBreadcrumbbarComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtBreadcrumbbarComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','btnCls','buttonConfig','buttonUI','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultButtonUI','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','displayField','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','menu','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','selection','session','shadow','shareableName','shim','showAnimation','showIcons','showMenuIcons','stateful','statefulDefaults','stateId','store','style','tabIndex','title','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','useSplitButtons','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCBreadcrumbbar()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','selectionchange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'breadcrumbbar'
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

//var events = (new EWCBreadcrumbbar()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
