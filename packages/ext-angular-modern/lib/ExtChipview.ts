//import EWCChipview from '../dist/ext-chipview.component.js';
//inputs: (new EWCChipview()).properties,
//import EWCChipview from '@sencha/ext-web-components-modern/dist/ext-chipview.component.js';
import { EWCChipview } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtChipview',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','closable','closableField','closeHandler','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','displayed','displayField','displayTpl','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','iconClsField','iconField','id','inactiveChildTabIndex','inline','innerCls','instanceCls','itemButtonMode','itemCls','itemId','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','lastSelected','layout','left','listeners','loadingHeight','loadingText','manageBorders','margin','markDirty','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','pressedDelay','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scope','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selected','selection','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','style','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','deactivate','deselect','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','rowselection','scrollablechange','select','selectionchange','show','storechange','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtChipviewComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtChipviewComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','closable','closableField','closeHandler','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','displayed','displayField','displayTpl','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','iconClsField','iconField','id','inactiveChildTabIndex','inline','innerCls','instanceCls','itemButtonMode','itemCls','itemId','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','lastSelected','layout','left','listeners','loadingHeight','loadingText','manageBorders','margin','markDirty','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','pressedDelay','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scope','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selected','selection','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','style','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCChipview()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','deactivate','deselect','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','rowselection','scrollablechange','select','selectionchange','show','storechange','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'chipview'
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

//var events = (new EWCChipview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
