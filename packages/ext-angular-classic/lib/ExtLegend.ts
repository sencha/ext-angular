//import EWCLegend from '../dist/ext-legend.component.js';
//inputs: (new EWCLegend()).properties,
//import EWCLegend from '@sencha/ext-web-components-classic/dist/ext-legend.component.js';
import { EWCLegend } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtLegend',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','blockRefresh','border','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','deferEmptyText','deferInitialRefresh','disabled','disabledCls','disableSelection','dock','docked','draggable','emptyText','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','itemCls','itemId','itemSelector','itemTpl','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','loadingCls','loadingHeight','loadingText','loadingUseMsg','loadMask','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','undefined','nameable','navigationModel','overCls','undefined','undefined','overItemCls','padding','plugins','preserveScrollOnRefresh','preserveScrollOnReload','publishes','rect','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','selectedItemCls','selection','selectionModel','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','singleSelect','stateEvents','stateful','stateId','store','style','tabIndex','throttledUpdate','toFrontOnShow','toggleable','touchAction','tpl','tplWriteMode','trackOver','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforecontainerclick','beforecontainercontextmenu','beforecontainerdblclick','beforecontainerkeydown','beforecontainerkeypress','beforecontainerkeyup','beforecontainermousedown','beforecontainermouseout','beforecontainermouseover','beforecontainermouseup','beforedeactivate','beforedeselect','beforedestroy','beforehide','beforeitemclick','beforeitemcontextmenu','beforeitemdblclick','beforeitemkeydown','beforeitemkeypress','beforeitemkeyup','beforeitemlongpress','beforeitemmousedown','beforeitemmouseenter','beforeitemmouseleave','beforeitemmouseup','beforerefresh','beforerender','beforeselect','beforeshow','beforestaterestore','beforestatesave','blur','boxready','containerclick','containercontextmenu','containerdblclick','containerkeydown','containerkeypress','containerkeyup','containermousedown','containermouseout','containermouseover','containermouseup','deactivate','deselect','destroy','disable','enable','focus','focuschange','focusenter','focusleave','hide','highlightitem','itemadd','itemclick','itemcontextmenu','itemdblclick','itemkeydown','itemkeypress','itemkeyup','itemlongpress','itemmousedown','itemmouseenter','itemmouseleave','itemmouseup','itemremove','itemupdate','move','refresh','removed','render','resize','select','selectionchange','show','staterestore','statesave','unhighlightitem','viewready',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLegendComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtLegendComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','blockRefresh','border','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','deferEmptyText','deferInitialRefresh','disabled','disabledCls','disableSelection','dock','docked','draggable','emptyText','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','itemCls','itemId','itemSelector','itemTpl','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','loadingCls','loadingHeight','loadingText','loadingUseMsg','loadMask','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','undefined','nameable','navigationModel','overCls','undefined','undefined','overItemCls','padding','plugins','preserveScrollOnRefresh','preserveScrollOnReload','publishes','rect','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','selectedItemCls','selection','selectionModel','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','singleSelect','stateEvents','stateful','stateId','store','style','tabIndex','throttledUpdate','toFrontOnShow','toggleable','touchAction','tpl','tplWriteMode','trackOver','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCLegend()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforecontainerclick','beforecontainercontextmenu','beforecontainerdblclick','beforecontainerkeydown','beforecontainerkeypress','beforecontainerkeyup','beforecontainermousedown','beforecontainermouseout','beforecontainermouseover','beforecontainermouseup','beforedeactivate','beforedeselect','beforedestroy','beforehide','beforeitemclick','beforeitemcontextmenu','beforeitemdblclick','beforeitemkeydown','beforeitemkeypress','beforeitemkeyup','beforeitemlongpress','beforeitemmousedown','beforeitemmouseenter','beforeitemmouseleave','beforeitemmouseup','beforerefresh','beforerender','beforeselect','beforeshow','beforestaterestore','beforestatesave','blur','boxready','containerclick','containercontextmenu','containerdblclick','containerkeydown','containerkeypress','containerkeyup','containermousedown','containermouseout','containermouseover','containermouseup','deactivate','deselect','destroy','disable','enable','focus','focuschange','focusenter','focusleave','hide','highlightitem','itemadd','itemclick','itemcontextmenu','itemdblclick','itemkeydown','itemkeypress','itemkeyup','itemlongpress','itemmousedown','itemmouseenter','itemmouseleave','itemmouseup','itemremove','itemupdate','move','refresh','removed','render','resize','select','selectionchange','show','staterestore','statesave','unhighlightitem','viewready',],
            vc
        )
        this.xtype = 'legend'
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

//var events = (new EWCLegend()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
