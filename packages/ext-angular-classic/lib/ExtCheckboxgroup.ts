//import EWCCheckboxgroup from '../dist/ext-checkboxgroup.component.js';
//inputs: (new EWCCheckboxgroup()).properties,
//import EWCCheckboxgroup from '@sencha/ext-web-components-classic/dist/ext-checkboxgroup.component.js';
import { EWCCheckboxgroup } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCheckboxgroup',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeError','activeErrorsTpl','activeItem','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','bubbleEvents','childEls','cls','columns','columnWidth','combineErrors','combineLabels','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','draggable','errorMsgCls','fieldBodyCls','fieldDefaults','fieldLabel','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','id','inactiveChildTabIndex','invalidCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelConnector','labelPad','labelSeparator','labelStyle','labelWidth','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','msgTarget','name','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','preventMark','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnChange','validation','validationField','value','valuePublishEvent','vertical','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','childmove','deactivate','destroy','dirtychange','disable','enable','errorchange','fielderrorchange','fieldvaliditychange','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','staterestore','statesave','validitychange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckboxgroupComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCheckboxgroupComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeError','activeErrorsTpl','activeItem','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','bubbleEvents','childEls','cls','columns','columnWidth','combineErrors','combineLabels','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','draggable','errorMsgCls','fieldBodyCls','fieldDefaults','fieldLabel','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','id','inactiveChildTabIndex','invalidCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelConnector','labelPad','labelSeparator','labelStyle','labelWidth','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','msgTarget','name','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','preventMark','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnChange','validation','validationField','value','valuePublishEvent','vertical','viewModel','weight','width','xtype',],
            (new EWCCheckboxgroup()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','childmove','deactivate','destroy','dirtychange','disable','enable','errorchange','fielderrorchange','fieldvaliditychange','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','staterestore','statesave','validitychange',],
            vc
        )
        this.xtype = 'checkboxgroup'
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

//var events = (new EWCCheckboxgroup()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
