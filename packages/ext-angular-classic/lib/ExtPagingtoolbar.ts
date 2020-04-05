//import EWCPagingtoolbar from '../dist/ext-pagingtoolbar.component.js';
//inputs: (new EWCPagingtoolbar()).properties,
//import EWCPagingtoolbar from '@sencha/ext-web-components-classic/dist/ext-pagingtoolbar.component.js';
import { EWCPagingtoolbar } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtPagingtoolbar',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','afterPageText','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','beforePageText','bind','border','bubbleEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButtonUI','defaultFieldUI','defaultFocus','defaultFooterButtonUI','defaultFooterFieldUI','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','displayInfo','displayMsg','dock','draggable','emptyMsg','enableOverflow','firstText','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','inactiveChildTabIndex','inputItemWidth','itemId','items','keyMap','keyMapEnabled','keyMapTarget','lastText','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','nextText','overCls','overflowHandler','undefined','undefined','padding','plugins','prependButtons','prevText','publishes','reference','referenceHolder','refreshText','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','store','style','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','trackMenus','twoWayBindable','ui','uiCls','userCls','vertical','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforechange','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','childmove','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','overflowchange','remove','removed','render','resize','show','staterestore','statesave',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPagingtoolbarComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtPagingtoolbarComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','afterPageText','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','beforePageText','bind','border','bubbleEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButtonUI','defaultFieldUI','defaultFocus','defaultFooterButtonUI','defaultFooterFieldUI','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','displayInfo','displayMsg','dock','draggable','emptyMsg','enableOverflow','firstText','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','inactiveChildTabIndex','inputItemWidth','itemId','items','keyMap','keyMapEnabled','keyMapTarget','lastText','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','nextText','overCls','overflowHandler','undefined','undefined','padding','plugins','prependButtons','prevText','publishes','reference','referenceHolder','refreshText','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','store','style','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','trackMenus','twoWayBindable','ui','uiCls','userCls','vertical','viewModel','weight','width','xtype',],
            (new EWCPagingtoolbar()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforechange','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','childmove','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','overflowchange','remove','removed','render','resize','show','staterestore','statesave',],
            vc
        )
        this.xtype = 'pagingtoolbar'
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

//var events = (new EWCPagingtoolbar()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
