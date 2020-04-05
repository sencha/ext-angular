//import EWCCalendar_list from '../dist/ext-calendar-list.component.js';
//inputs: (new EWCCalendar_list()).properties,
//import EWCCalendar_list from '@sencha/ext-web-components-classic/dist/ext-calendar-list.component.js';
import { EWCCalendar_list } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCalendar_list',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','blockRefresh','border','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','deferEmptyText','deferInitialRefresh','disabled','disabledCls','disableSelection','dock','draggable','emptyText','enableToggle','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','itemCls','itemId','itemSelector','itemTpl','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','loadingCls','loadingHeight','loadingText','loadingUseMsg','loadMask','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','undefined','nameable','navigationModel','overCls','undefined','undefined','overItemCls','padding','plugins','preserveScrollOnRefresh','preserveScrollOnReload','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','selectedItemCls','selection','selectionModel','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','singleSelect','stateEvents','stateful','stateId','store','style','tabIndex','throttledUpdate','toFrontOnShow','touchAction','tpl','tplWriteMode','trackOver','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforecontainerclick','beforecontainercontextmenu','beforecontainerdblclick','beforecontainerkeydown','beforecontainerkeypress','beforecontainerkeyup','beforecontainermousedown','beforecontainermouseout','beforecontainermouseover','beforecontainermouseup','beforedeactivate','beforedeselect','beforedestroy','beforehide','beforeitemclick','beforeitemcontextmenu','beforeitemdblclick','beforeitemkeydown','beforeitemkeypress','beforeitemkeyup','beforeitemlongpress','beforeitemmousedown','beforeitemmouseenter','beforeitemmouseleave','beforeitemmouseup','beforerefresh','beforerender','beforeselect','beforeshow','beforestaterestore','beforestatesave','blur','boxready','containerclick','containercontextmenu','containerdblclick','containerkeydown','containerkeypress','containerkeyup','containermousedown','containermouseout','containermouseover','containermouseup','deactivate','deselect','destroy','disable','enable','focus','focuschange','focusenter','focusleave','hide','highlightitem','itemadd','itemclick','itemcontextmenu','itemdblclick','itemkeydown','itemkeypress','itemkeyup','itemlongpress','itemmousedown','itemmouseenter','itemmouseleave','itemmouseup','itemremove','itemupdate','move','refresh','removed','render','resize','select','selectionchange','show','staterestore','statesave','unhighlightitem','viewready',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_listComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_listComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','blockRefresh','border','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','deferEmptyText','deferInitialRefresh','disabled','disabledCls','disableSelection','dock','draggable','emptyText','enableToggle','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','itemCls','itemId','itemSelector','itemTpl','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','loadingCls','loadingHeight','loadingText','loadingUseMsg','loadMask','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','undefined','nameable','navigationModel','overCls','undefined','undefined','overItemCls','padding','plugins','preserveScrollOnRefresh','preserveScrollOnReload','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','selectedItemCls','selection','selectionModel','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','singleSelect','stateEvents','stateful','stateId','store','style','tabIndex','throttledUpdate','toFrontOnShow','touchAction','tpl','tplWriteMode','trackOver','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCCalendar_list()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforecontainerclick','beforecontainercontextmenu','beforecontainerdblclick','beforecontainerkeydown','beforecontainerkeypress','beforecontainerkeyup','beforecontainermousedown','beforecontainermouseout','beforecontainermouseover','beforecontainermouseup','beforedeactivate','beforedeselect','beforedestroy','beforehide','beforeitemclick','beforeitemcontextmenu','beforeitemdblclick','beforeitemkeydown','beforeitemkeypress','beforeitemkeyup','beforeitemlongpress','beforeitemmousedown','beforeitemmouseenter','beforeitemmouseleave','beforeitemmouseup','beforerefresh','beforerender','beforeselect','beforeshow','beforestaterestore','beforestatesave','blur','boxready','containerclick','containercontextmenu','containerdblclick','containerkeydown','containerkeypress','containerkeyup','containermousedown','containermouseout','containermouseover','containermouseup','deactivate','deselect','destroy','disable','enable','focus','focuschange','focusenter','focusleave','hide','highlightitem','itemadd','itemclick','itemcontextmenu','itemdblclick','itemkeydown','itemkeypress','itemkeyup','itemlongpress','itemmousedown','itemmouseenter','itemmouseleave','itemmouseup','itemremove','itemupdate','move','refresh','removed','render','resize','select','selectionchange','show','staterestore','statesave','unhighlightitem','viewready',],
            vc
        )
        this.xtype = 'calendar-list'
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

//var events = (new EWCCalendar_list()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
