//import EWCEditor from '../dist/ext-editor.component.js';
//inputs: (new EWCEditor()).properties,
//import EWCEditor from '@sencha/ext-web-components-modern/dist/ext-editor.component.js';
import { EWCEditor } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtEditor',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignment','alignSelf','allowBlur','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cancelOnClear','cancelOnEsc','cardSwitchAnimation','centered','cls','completeOnEnter','constrain','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','docked','draggable','undefined','undefined','undefined','field','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideEl','hideMode','hideOnMaskTap','html','id','ignoreNoChange','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','margin','masked','matchFont','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','offset','padding','parentEl','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','revertInvalid','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','swallowKeys','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','updateEl','userCls','userSelectable','value','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecomplete','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestartedit','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','canceledit','centeredchange','complete','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','specialkey','startedit','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtEditorComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtEditorComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignment','alignSelf','allowBlur','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cancelOnClear','cancelOnEsc','cardSwitchAnimation','centered','cls','completeOnEnter','constrain','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','docked','draggable','undefined','undefined','undefined','field','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideEl','hideMode','hideOnMaskTap','html','id','ignoreNoChange','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','margin','masked','matchFont','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','offset','padding','parentEl','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','revertInvalid','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','swallowKeys','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','updateEl','userCls','userSelectable','value','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCEditor()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecomplete','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestartedit','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','canceledit','centeredchange','complete','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','specialkey','startedit','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'editor'
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

//var events = (new EWCEditor()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
