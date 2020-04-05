//import EWCCelleditor from '../dist/ext-celleditor.component.js';
//inputs: (new EWCCelleditor()).properties,
//import EWCCelleditor from '@sencha/ext-web-components-classic/dist/ext-celleditor.component.js';
import { EWCCelleditor } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCelleditor',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignment','alignOnScroll','alignTarget','allowBlur','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','autoSize','baseCls','bind','border','bubbleEvents','cancelOnEsc','childEls','cls','columnWidth','completeOnEnter','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','draggable','field','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','height','hidden','hideEl','hideMode','html','id','ignoreNoChange','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','offsets','overCls','undefined','undefined','padding','parentEl','plugins','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','revertInvalid','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','suspendLayout','swallowKeys','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','updateEl','userCls','value','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforecomplete','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestartedit','beforestaterestore','beforestatesave','blur','boxready','canceledit','childmove','complete','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','specialkey','startedit','staterestore','statesave',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCelleditorComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCelleditorComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignment','alignOnScroll','alignTarget','allowBlur','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','autoSize','baseCls','bind','border','bubbleEvents','cancelOnEsc','childEls','cls','columnWidth','completeOnEnter','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','draggable','field','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','height','hidden','hideEl','hideMode','html','id','ignoreNoChange','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','offsets','overCls','undefined','undefined','padding','parentEl','plugins','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','revertInvalid','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','suspendLayout','swallowKeys','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','updateEl','userCls','value','viewModel','weight','width','xtype',],
            (new EWCCelleditor()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforecomplete','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestartedit','beforestaterestore','beforestatesave','blur','boxready','canceledit','childmove','complete','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','specialkey','startedit','staterestore','statesave',],
            vc
        )
        this.xtype = 'celleditor'
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

//var events = (new EWCCelleditor()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
