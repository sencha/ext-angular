//import EWCSliderfield from '../dist/ext-sliderfield.component.js';
//inputs: (new EWCSliderfield()).properties,
//import EWCSliderfield from '@sencha/ext-web-components-classic/dist/ext-sliderfield.component.js';
import { EWCSliderfield } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtSliderfield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','alwaysOnTop','anchor','animate','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','border','checkChangeBuffer','checkChangeEvents','childEls','clickToChange','cls','columnWidth','componentCls','componentLayout','constrain','constrainThumbs','constraintInsets','constrainTo','contentEl','controller','data','decimalPrecision','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','dock','draggable','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','undefined','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','id','increment','inputAttrTpl','inputId','inputType','invalidCls','invalidText','isTextInput','itemId','keyIncrement','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxValue','maxWidth','minHeight','minValue','minWidth','modal','modelValidation','msgTarget','name','nameable','overCls','undefined','undefined','padding','pageSize','plugins','preventMark','publishes','publishOnComplete','readOnly','readOnlyCls','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','tabIndex','thumbPerValue','tipText','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','useTips','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','value','valuePublishEvent','values','vertical','viewModel','weight','width','xtype','zeroBasedSnapping',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforechange','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','changecomplete','deactivate','destroy','dirtychange','disable','drag','dragend','dragstart','enable','errorchange','focus','focusenter','focusleave','hide','move','removed','render','resize','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSliderfieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSliderfieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','alwaysOnTop','anchor','animate','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','border','checkChangeBuffer','checkChangeEvents','childEls','clickToChange','cls','columnWidth','componentCls','componentLayout','constrain','constrainThumbs','constraintInsets','constrainTo','contentEl','controller','data','decimalPrecision','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','dock','draggable','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','undefined','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','id','increment','inputAttrTpl','inputId','inputType','invalidCls','invalidText','isTextInput','itemId','keyIncrement','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxValue','maxWidth','minHeight','minValue','minWidth','modal','modelValidation','msgTarget','name','nameable','overCls','undefined','undefined','padding','pageSize','plugins','preventMark','publishes','publishOnComplete','readOnly','readOnlyCls','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','tabIndex','thumbPerValue','tipText','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','useTips','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','value','valuePublishEvent','values','vertical','viewModel','weight','width','xtype','zeroBasedSnapping',],
            (new EWCSliderfield()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforechange','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','changecomplete','deactivate','destroy','dirtychange','disable','drag','dragend','dragstart','enable','errorchange','focus','focusenter','focusleave','hide','move','removed','render','resize','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
            vc
        )
        this.xtype = 'sliderfield'
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

//var events = (new EWCSliderfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
