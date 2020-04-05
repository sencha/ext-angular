//import EWCDisplayfield from '../dist/ext-displayfield.component.js';
//inputs: (new EWCDisplayfield()).properties,
//import EWCDisplayfield from '@sencha/ext-web-components-classic/dist/ext-displayfield.component.js';
import { EWCDisplayfield } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtDisplayfield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','border','checkChangeBuffer','checkChangeEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','dock','draggable','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','undefined','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','htmlEncode','id','inputAttrTpl','inputId','inputType','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','msgTarget','name','nameable','overCls','undefined','undefined','padding','plugins','preventMark','publishes','readOnly','readOnlyCls','reference','region','renderConfig','renderData','renderer','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scope','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','value','valuePublishEvent','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','deactivate','destroy','dirtychange','disable','enable','errorchange','focus','focusenter','focusleave','hide','move','removed','render','resize','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDisplayfieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDisplayfieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','border','checkChangeBuffer','checkChangeEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','dock','draggable','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','undefined','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','htmlEncode','id','inputAttrTpl','inputId','inputType','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','msgTarget','name','nameable','overCls','undefined','undefined','padding','plugins','preventMark','publishes','readOnly','readOnlyCls','reference','region','renderConfig','renderData','renderer','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scope','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','value','valuePublishEvent','viewModel','weight','width','xtype',],
            (new EWCDisplayfield()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','deactivate','destroy','dirtychange','disable','enable','errorchange','focus','focusenter','focusleave','hide','move','removed','render','resize','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
            vc
        )
        this.xtype = 'displayfield'
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

//var events = (new EWCDisplayfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
