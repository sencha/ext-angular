//import EWCNumberfield from '../dist/ext-numberfield.component.js';
//inputs: (new EWCNumberfield()).properties,
//import EWCNumberfield from '@sencha/ext-web-components-classic/dist/ext-numberfield.component.js';
import { EWCNumberfield } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtNumberfield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowDecimals','allowExponential','allowOnlyWhitespace','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoHideInputMask','autoRender','undefined','autoShow','autoStripChars','baseBodyCls','baseChars','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','checkChangeBuffer','checkChangeEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','decimalPrecision','decimalSeparator','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','disableKeyFilter','dock','draggable','editable','emptyCls','emptyText','enableKeyEvents','enforceMaxLength','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','undefined','formBind','formItemCls','frame','grow','growMax','growMin','height','hidden','hideEmptyLabel','hideLabel','hideMode','hideTrigger','html','id','inputAttrTpl','inputId','inputMask','inputType','inputWrapCls','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','keyNavEnabled','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maskRe','maxHeight','maxLength','maxLengthText','maxText','maxValue','maxWidth','minHeight','minLength','minLengthText','minText','minValue','minWidth','modal','modelValidation','mouseWheelEnabled','msgTarget','name','nameable','nanText','negativeText','overCls','undefined','undefined','padding','plugins','preventMark','publishes','readOnly','readOnlyCls','reference','regex','regexText','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeatTriggerClick','requiredCls','resizable','resizeHandles','saveDelay','scrollable','selectOnFocus','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','spinDownEnabled','spinUpEnabled','stateEvents','stateful','stateId','step','stripCharsRe','style','submitLocaleSeparator','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','triggers','triggerWrapCls','twoWayBindable','ui','uiCls','userCls','validateBlank','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','validator','value','valuePublishEvent','viewModel','vtype','vtypeText','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','autosize','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','deactivate','destroy','dirtychange','disable','enable','errorchange','focus','focusenter','focusleave','hide','keydown','keypress','keyup','move','paste','removed','render','resize','show','specialkey','spin','spindown','spinend','spinup','staterestore','statesave','validitychange','writeablechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNumberfieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtNumberfieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowDecimals','allowExponential','allowOnlyWhitespace','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoHideInputMask','autoRender','undefined','autoShow','autoStripChars','baseBodyCls','baseChars','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','checkChangeBuffer','checkChangeEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','decimalPrecision','decimalSeparator','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','disableKeyFilter','dock','draggable','editable','emptyCls','emptyText','enableKeyEvents','enforceMaxLength','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','undefined','formBind','formItemCls','frame','grow','growMax','growMin','height','hidden','hideEmptyLabel','hideLabel','hideMode','hideTrigger','html','id','inputAttrTpl','inputId','inputMask','inputType','inputWrapCls','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','keyNavEnabled','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maskRe','maxHeight','maxLength','maxLengthText','maxText','maxValue','maxWidth','minHeight','minLength','minLengthText','minText','minValue','minWidth','modal','modelValidation','mouseWheelEnabled','msgTarget','name','nameable','nanText','negativeText','overCls','undefined','undefined','padding','plugins','preventMark','publishes','readOnly','readOnlyCls','reference','regex','regexText','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeatTriggerClick','requiredCls','resizable','resizeHandles','saveDelay','scrollable','selectOnFocus','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','spinDownEnabled','spinUpEnabled','stateEvents','stateful','stateId','step','stripCharsRe','style','submitLocaleSeparator','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','triggers','triggerWrapCls','twoWayBindable','ui','uiCls','userCls','validateBlank','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','validator','value','valuePublishEvent','viewModel','vtype','vtypeText','weight','width','xtype',],
            (new EWCNumberfield()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','autosize','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','deactivate','destroy','dirtychange','disable','enable','errorchange','focus','focusenter','focusleave','hide','keydown','keypress','keyup','move','paste','removed','render','resize','show','specialkey','spin','spindown','spinend','spinup','staterestore','statesave','validitychange','writeablechange',],
            vc
        )
        this.xtype = 'numberfield'
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

//var events = (new EWCNumberfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
