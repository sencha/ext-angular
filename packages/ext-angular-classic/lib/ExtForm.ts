//import EWCForm from '../dist/ext-form.component.js';
//inputs: (new EWCForm()).properties,
//import EWCForm from '@sencha/ext-web-components-classic/dist/ext-form.component.js';
import { EWCForm } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtForm',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','api','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','baseParams','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','errorReader','expandToolText','fbar','fieldDefaults','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','jsonSubmit','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','method','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','paramOrder','paramsAsHash','placeholder','placeholderCollapseHideMode','plugins','pollForChanges','pollInterval','undefined','publishes','rbar','reader','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','standardSubmit','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','tbar','timeout','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','trackResetOnLoad','twoWayBindable','ui','uiCls','url','userCls','viewModel','waitMsgTarget','waitTitle','weight','width','xtype',],
    outputs: ['ready','created','actioncomplete','actionfailed','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeaction','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','dirtychange','disable','dockedadd','dockedremove','enable','expand','fielderrorchange','fieldvaliditychange','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat','validitychange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFormComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtFormComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','api','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','baseParams','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','errorReader','expandToolText','fbar','fieldDefaults','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','jsonSubmit','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','method','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','paramOrder','paramsAsHash','placeholder','placeholderCollapseHideMode','plugins','pollForChanges','pollInterval','undefined','publishes','rbar','reader','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','standardSubmit','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','tbar','timeout','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','trackResetOnLoad','twoWayBindable','ui','uiCls','url','userCls','viewModel','waitMsgTarget','waitTitle','weight','width','xtype',],
            (new EWCForm()).events,
            ['ready','created','actioncomplete','actionfailed','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeaction','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','dirtychange','disable','dockedadd','dockedremove','enable','expand','fielderrorchange','fieldvaliditychange','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat','validitychange',],
            vc
        )
        this.xtype = 'form'
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

//var events = (new EWCForm()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
