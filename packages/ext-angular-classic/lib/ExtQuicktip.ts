//import EWCQuicktip from '../dist/ext-quicktip.component.js';
//inputs: (new EWCQuicktip()).properties,
//import EWCQuicktip from '@sencha/ext-web-components-classic/dist/ext-quicktip.component.js';
import { EWCQuicktip } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtQuicktip',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','anchorToTarget','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoHide','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','checkNestedDelegates','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constrainPosition','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','delegate','detachOnRemove','disabled','disabledCls','dismissDelay','dock','dockedItems','draggable','expandToolText','fadeOutDuration','fbar','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','header','headerOverCls','headerPosition','height','hidden','hideAction','hideCollapseTool','hideDelay','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','interceptTitles','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','mouseOffset','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','showDelay','showOnTap','shrinkWrap','shrinkWrapDock','simpleDrag','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','target','targetOffset','tbar','text','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','trackMouse','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtQuicktipComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtQuicktipComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','anchorToTarget','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoHide','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','checkNestedDelegates','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constrainPosition','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','delegate','detachOnRemove','disabled','disabledCls','dismissDelay','dock','dockedItems','draggable','expandToolText','fadeOutDuration','fbar','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','header','headerOverCls','headerPosition','height','hidden','hideAction','hideCollapseTool','hideDelay','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','interceptTitles','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','mouseOffset','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','showDelay','showOnTap','shrinkWrap','shrinkWrapDock','simpleDrag','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','target','targetOffset','tbar','text','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','trackMouse','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCQuicktip()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
            vc
        )
        this.xtype = 'quicktip'
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

//var events = (new EWCQuicktip()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
