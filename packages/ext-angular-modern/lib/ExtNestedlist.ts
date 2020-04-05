//import EWCNestedlist from '../dist/ext-nestedlist.component.js';
//inputs: (new EWCNestedlist()).properties,
//import EWCNestedlist from '@sencha/ext-web-components-modern/dist/ext-nestedlist.component.js';
import { EWCNestedlist } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtNestedlist',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowDeselect','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','backButton','backText','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','detailCard','detailContainer','disabled','displayed','displayField','docked','draggable','emptyText','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','lastActiveList','lastNode','layout','left','listConfig','listeners','loadingText','manageBorders','margin','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','onItemDisclosure','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','style','tabIndex','title','toFrontOnShow','toolbar','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','updateTitleText','userCls','userSelectable','useTitleAsBackText','undefined','variableHeights','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','back','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforeload','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeselectionchange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','containertap','deactivate','deselect','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemdoubletap','itemtap','leafitemtap','leftchange','listchange','load','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','selectionchange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNestedlistComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtNestedlistComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowDeselect','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','backButton','backText','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','detailCard','detailContainer','disabled','displayed','displayField','docked','draggable','emptyText','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','lastActiveList','lastNode','layout','left','listConfig','listeners','loadingText','manageBorders','margin','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','onItemDisclosure','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','style','tabIndex','title','toFrontOnShow','toolbar','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','updateTitleText','userCls','userSelectable','useTitleAsBackText','undefined','variableHeights','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCNestedlist()).events,
            ['ready','created','activate','activeItemchange','add','added','back','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforeload','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeselectionchange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','containertap','deactivate','deselect','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemdoubletap','itemtap','leafitemtap','leftchange','listchange','load','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','selectionchange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'nestedlist'
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

//var events = (new EWCNestedlist()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
