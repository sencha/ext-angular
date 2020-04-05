//import EWCChart from '../dist/ext-chart.component.js';
//inputs: (new EWCChart()).properties,
//import EWCChart from '@sencha/ext-web-components-classic/dist/ext-chart.component.js';
import { EWCChart } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtChart',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animation','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','axes','background','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','captions','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','colors','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','downloadServerUrl','draggable','engine','expandToolText','fbar','fixed','flex','flipXY','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','gradients','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','highlightItem','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerPadding','insetPadding','interactions','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','legend','liquidLayout','listeners','liveDrag','loader','mainRect','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','previewAltText','previewTitleText','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandler','resizeHandles','saveDelay','scrollable','series','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','sprites','stateEvents','stateful','stateId','store','style','surfaceZIndexes','suspendLayout','tabGuard','tabIndex','tbar','theme','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforerefresh','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','bodyresize','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','itemclick','itemdblclick','itemhighlight','itemhighlightchange','itemmousedown','itemmousemove','itemmouseout','itemmouseover','itemmouseup','itemtap','layout','move','redraw','refresh','remove','removed','render','resize','show','spriteclick','spritedblclick','spritemousedown','spritemousemove','spritemouseout','spritemouseover','spritemouseup','spritetap','staterestore','statesave','storechange','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtChartComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtChartComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animation','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','axes','background','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','captions','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','colors','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','downloadServerUrl','draggable','engine','expandToolText','fbar','fixed','flex','flipXY','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','gradients','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','highlightItem','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','innerPadding','insetPadding','interactions','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','legend','liquidLayout','listeners','liveDrag','loader','mainRect','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','previewAltText','previewTitleText','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandler','resizeHandles','saveDelay','scrollable','series','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','sprites','stateEvents','stateful','stateId','store','style','surfaceZIndexes','suspendLayout','tabGuard','tabIndex','tbar','theme','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCChart()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforerefresh','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','bodyresize','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','itemclick','itemdblclick','itemhighlight','itemhighlightchange','itemmousedown','itemmousemove','itemmouseout','itemmouseover','itemmouseup','itemtap','layout','move','redraw','refresh','remove','removed','render','resize','show','spriteclick','spritedblclick','spritemousedown','spritemousemove','spritemouseout','spritemouseover','spritemouseup','spritetap','staterestore','statesave','storechange','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
            vc
        )
        this.xtype = 'chart'
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

//var events = (new EWCChart()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
