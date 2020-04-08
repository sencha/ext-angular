//import EWCItemselector from '../dist/ext-itemselector.component.js';
//inputs: (new EWCItemselector()).properties,
//import EWCItemselector from '@sencha/ext-web-components-classic/dist/ext-itemselector.component.js';
import { EWCItemselector } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtItemselector',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeError','activeErrorsTpl','activeItem','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','appendOnly','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','bubbleEvents','buttons','buttonsText','childEls','cls','columnWidth','combineErrors','combineLabels','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','ddReorder','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','delimiter','detachOnRemove','disabled','disabledCls','displayField','dock','draggable','dragGroup','dragText','dropGroup','errorMsgCls','fieldBodyCls','fieldDefaults','fieldLabel','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','hideNavIcons','html','id','inactiveChildTabIndex','invalidCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelConnector','labelPad','labelSeparator','labelStyle','labelWidth','layout','liquidLayout','listConfig','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxSelections','maxSelectionsText','maxWidth','minHeight','minSelections','minSelectionsText','minWidth','modal','modelValidation','msgTarget','name','nameable','nameHolder','overCls','undefined','undefined','padding','pageSize','plugins','preventMark','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','store','style','submitValue','suspendLayout','tabGuard','tabIndex','tbar','title','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnChange','validation','validationField','value','valueField','valuePublishEvent','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','childmove','deactivate','destroy','dirtychange','disable','enable','errorchange','fielderrorchange','fieldvaliditychange','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','staterestore','statesave','validitychange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtItemselectorComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtItemselectorComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeError','activeErrorsTpl','activeItem','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','appendOnly','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','bubbleEvents','buttons','buttonsText','childEls','cls','columnWidth','combineErrors','combineLabels','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','ddReorder','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','delimiter','detachOnRemove','disabled','disabledCls','displayField','dock','draggable','dragGroup','dragText','dropGroup','errorMsgCls','fieldBodyCls','fieldDefaults','fieldLabel','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','hideNavIcons','html','id','inactiveChildTabIndex','invalidCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelConnector','labelPad','labelSeparator','labelStyle','labelWidth','layout','liquidLayout','listConfig','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxSelections','maxSelectionsText','maxWidth','minHeight','minSelections','minSelectionsText','minWidth','modal','modelValidation','msgTarget','name','nameable','nameHolder','overCls','undefined','undefined','padding','pageSize','plugins','preventMark','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','store','style','submitValue','suspendLayout','tabGuard','tabIndex','tbar','title','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnChange','validation','validationField','value','valueField','valuePublishEvent','viewModel','weight','width','xtype',],
            (new EWCItemselector()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','childmove','deactivate','destroy','dirtychange','disable','enable','errorchange','fielderrorchange','fieldvaliditychange','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','staterestore','statesave','validitychange',],
            vc
        )
        this.xtype = 'itemselector'
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

//var events = (new EWCItemselector()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
