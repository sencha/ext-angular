//import EWCDatefield from '../dist/ext-datefield.component.js';
//inputs: (new EWCDatefield()).properties,
//import EWCDatefield from '@sencha/ext-web-components-classic/dist/ext-datefield.component.js';
import { EWCDatefield } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtDatefield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowOnlyWhitespace','altFormats','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaDisabledDatesText','ariaDisabledDaysText','ariaErrorText','ariaFormat','ariaHelp','ariaLabel','ariaLabelledBy','ariaMaxText','ariaMinText','autoEl','autoFitErrors','autoHideInputMask','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','checkChangeBuffer','checkChangeEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','disabledDates','disabledDatesText','disabledDays','disabledDaysText','disableKeyFilter','dock','draggable','editable','emptyCls','emptyText','enableKeyEvents','enforceMaxLength','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','format','formatText','formBind','formItemCls','frame','grow','growMax','growMin','height','hidden','hideEmptyLabel','hideLabel','hideMode','hideTrigger','html','id','inputAttrTpl','inputId','inputMask','inputType','inputWrapCls','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maskRe','matchFieldWidth','maxHeight','maxLength','maxLengthText','maxText','maxValue','maxWidth','minHeight','minLength','minLengthText','minText','minValue','minWidth','modal','modelValidation','msgTarget','name','nameable','openCls','overCls','undefined','undefined','padding','pickerAlign','pickerOffset','plugins','preventMark','publishes','readOnly','readOnlyCls','reference','regex','regexText','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeatTriggerClick','requiredCls','resizable','resizeHandles','saveDelay','scrollable','selectOnFocus','session','shadow','shadowOffset','shareableName','shim','showToday','shrinkWrap','undefined','startDay','stateEvents','stateful','stateId','stripCharsRe','style','submitFormat','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','triggerCls','triggers','triggerWrapCls','twoWayBindable','ui','uiCls','userCls','useStrict','validateBlank','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','validator','value','valuePublishEvent','viewModel','vtype','vtypeText','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','autosize','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','collapse','deactivate','destroy','dirtychange','disable','enable','errorchange','expand','focus','focusenter','focusleave','hide','keydown','keypress','keyup','move','paste','removed','render','resize','select','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatefieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDatefieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowOnlyWhitespace','altFormats','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaDisabledDatesText','ariaDisabledDaysText','ariaErrorText','ariaFormat','ariaHelp','ariaLabel','ariaLabelledBy','ariaMaxText','ariaMinText','autoEl','autoFitErrors','autoHideInputMask','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','checkChangeBuffer','checkChangeEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','dirtyCls','disabled','disabledCls','disabledDates','disabledDatesText','disabledDays','disabledDaysText','disableKeyFilter','dock','draggable','editable','emptyCls','emptyText','enableKeyEvents','enforceMaxLength','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','format','formatText','formBind','formItemCls','frame','grow','growMax','growMin','height','hidden','hideEmptyLabel','hideLabel','hideMode','hideTrigger','html','id','inputAttrTpl','inputId','inputMask','inputType','inputWrapCls','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maskRe','matchFieldWidth','maxHeight','maxLength','maxLengthText','maxText','maxValue','maxWidth','minHeight','minLength','minLengthText','minText','minValue','minWidth','modal','modelValidation','msgTarget','name','nameable','openCls','overCls','undefined','undefined','padding','pickerAlign','pickerOffset','plugins','preventMark','publishes','readOnly','readOnlyCls','reference','regex','regexText','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeatTriggerClick','requiredCls','resizable','resizeHandles','saveDelay','scrollable','selectOnFocus','session','shadow','shadowOffset','shareableName','shim','showToday','shrinkWrap','undefined','startDay','stateEvents','stateful','stateId','stripCharsRe','style','submitFormat','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','triggerCls','triggers','triggerWrapCls','twoWayBindable','ui','uiCls','userCls','useStrict','validateBlank','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','validator','value','valuePublishEvent','viewModel','vtype','vtypeText','weight','width','xtype',],
            (new EWCDatefield()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','autosize','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','collapse','deactivate','destroy','dirtychange','disable','enable','errorchange','expand','focus','focusenter','focusleave','hide','keydown','keypress','keyup','move','paste','removed','render','resize','select','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
            vc
        )
        this.xtype = 'datefield'
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

//var events = (new EWCDatefield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
