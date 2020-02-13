//import EWCGridcolumn from '../dist/ext-gridcolumn.component.js';
//inputs: (new EWCGridcolumn()).properties,
//import EWCGridcolumn from '@sencha/ext-web-components-classic/dist/ext-gridcolumn.component.js';
import { EWCGridcolumn } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtGridcolumn',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','align','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','bubbleEvents','cellFocusable','cellWrap','childEls','cls','columns','columnsText','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','dataIndex','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','defaultWidth','detachOnRemove','dirtyText','disabled','disabledCls','dock','draggable','editor','editRenderer','emptyCellText','enableColumnHide','enableTextSelection','exportRenderer','exportStyle','exportSummaryRenderer','undefined','undefined','flex','floating','focusableContainer','focusCls','focusOnToFront','formatter','formBind','frame','groupable','undefined','headerWrap','height','hidden','hideable','hideMode','html','id','ignoreExport','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','liquidLayout','listeners','liveDrag','loader','lockable','locked','margin','maskDefaults','maskElement','maxHeight','maxWidth','menuDisabled','menuText','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','producesHTML','publishes','reference','referenceHolder','region','renderConfig','renderData','renderer','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scope','scrollable','sealed','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','sortable','sortAscText','sortClearText','sortDescText','sorter','stateEvents','stateful','stateId','style','summaryRenderer','suspendLayout','tabGuard','tabIndex','tdCls','text','toFrontOnShow','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','updater','userCls','variableRowHeight','viewModel','weight','width','xtype',],
    outputs: ['ready','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','columnhide','columnmove','columnresize','columnschanged','columnshow','deactivate','destroy','disable','enable','focus','focusenter','focusleave','headerclick','headercontextmenu','headertriggerclick','hide','menucreate','move','remove','removed','render','resize','show','sortchange','staterestore','statesave',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridcolumnComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtGridcolumnComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','align','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','bubbleEvents','cellFocusable','cellWrap','childEls','cls','columns','columnsText','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','dataIndex','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','defaultWidth','detachOnRemove','dirtyText','disabled','disabledCls','dock','draggable','editor','editRenderer','emptyCellText','enableColumnHide','enableTextSelection','exportRenderer','exportStyle','exportSummaryRenderer','undefined','undefined','flex','floating','focusableContainer','focusCls','focusOnToFront','formatter','formBind','frame','groupable','undefined','headerWrap','height','hidden','hideable','hideMode','html','id','ignoreExport','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','liquidLayout','listeners','liveDrag','loader','lockable','locked','margin','maskDefaults','maskElement','maxHeight','maxWidth','menuDisabled','menuText','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','producesHTML','publishes','reference','referenceHolder','region','renderConfig','renderData','renderer','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scope','scrollable','sealed','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','sortable','sortAscText','sortClearText','sortDescText','sorter','stateEvents','stateful','stateId','style','summaryRenderer','suspendLayout','tabGuard','tabIndex','tdCls','text','toFrontOnShow','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','updater','userCls','variableRowHeight','viewModel','weight','width','xtype',],
            (new EWCGridcolumn()).events,
            ['ready','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','columnhide','columnmove','columnresize','columnschanged','columnshow','deactivate','destroy','disable','enable','focus','focusenter','focusleave','headerclick','headercontextmenu','headertriggerclick','hide','menucreate','move','remove','removed','render','resize','show','sortchange','staterestore','statesave',],
            vc
        )
        this.xtype = 'gridcolumn'
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

//var events = (new EWCGridcolumn()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
