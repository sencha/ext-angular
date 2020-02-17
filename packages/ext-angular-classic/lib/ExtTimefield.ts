//import EWCTimefield from '../dist/ext-timefield.component.js';
//inputs: (new EWCTimefield()).properties,
//import EWCTimefield from '@sencha/ext-web-components-classic/dist/ext-timefield.component.js';
import { EWCTimefield } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './runtime/angularbase';

@Component({
    selector: 'ExtTimefield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowOnlyWhitespace','allQuery','altFormats','alwaysOnTop','anchor','animateShadow','anyMatch','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoHideInputMask','autoLoadOnValue','autoRender','undefined','autoSelect','autoSelectLast','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','caseSensitive','checkChangeBuffer','checkChangeEvents','childEls','clearFilterOnBlur','cls','undefined','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListConfig','defaultListenerScope','undefined','dirtyCls','disabled','disabledCls','disableKeyFilter','displayField','displayTpl','dock','draggable','editable','emptyCls','emptyText','enableKeyEvents','enableRegEx','enforceMaxLength','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','forceSelection','format','formatText','formBind','formItemCls','frame','grow','growMax','growMin','growToLongestValue','height','hidden','hiddenDataCls','hiddenName','hideEmptyLabel','hideLabel','hideMode','hideTrigger','html','id','increment','inputAttrTpl','inputId','inputMask','inputType','inputWrapCls','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listConfig','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maskRe','matchFieldWidth','maxHeight','maxLength','maxLengthText','maxText','maxValue','maxWidth','minChars','minHeight','minLength','minLengthText','minText','minValue','minWidth','modal','modelValidation','msgTarget','undefined','name','nameable','openCls','overCls','undefined','undefined','padding','pageSize','pickerAlign','pickerMaxHeight','pickerOffset','undefined','plugins','preventMark','publishes','queryCaching','queryDelay','queryMode','queryParam','readOnly','readOnlyCls','reference','regex','regexText','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeatTriggerClick','requiredCls','resizable','resizeHandles','saveDelay','scrollable','selection','selectOnFocus','selectOnTab','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','snapToIncrement','stateEvents','stateful','stateId','store','stripCharsRe','style','submitFormat','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','transform','transformInPlace','triggerAction','triggerCls','triggers','triggerWrapCls','twoWayBindable','typeAhead','typeAheadDelay','ui','uiCls','userCls','validateBlank','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','validator','value','valueField','valueNotFoundText','valuePublishEvent','viewModel','vtype','vtypeText','weight','width','xtype',],
    outputs: ['ready','activate','added','afterlayoutanimation','afterrender','autosize','beforeactivate','beforedeactivate','beforedeselect','beforedestroy','beforehide','beforequery','beforerender','beforeselect','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','collapse','deactivate','destroy','dirtychange','disable','enable','errorchange','expand','focus','focusenter','focusleave','hide','keydown','keypress','keyup','move','paste','removed','render','resize','select','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTimefieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTimefieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','activeError','activeErrorsTpl','afterBodyEl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','alignOnScroll','alignTarget','allowBlank','allowOnlyWhitespace','allQuery','altFormats','alwaysOnTop','anchor','animateShadow','anyMatch','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoEl','autoFitErrors','autoHideInputMask','autoLoadOnValue','autoRender','undefined','autoSelect','autoSelectLast','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','bind','blankText','border','caseSensitive','checkChangeBuffer','checkChangeEvents','childEls','clearFilterOnBlur','cls','undefined','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListConfig','defaultListenerScope','undefined','dirtyCls','disabled','disabledCls','disableKeyFilter','displayField','displayTpl','dock','draggable','editable','emptyCls','emptyText','enableKeyEvents','enableRegEx','enforceMaxLength','errorMsgCls','fieldBodyCls','fieldCls','fieldLabel','fieldStyle','fieldSubTpl','fixed','flex','floating','focusCls','focusOnToFront','forceSelection','format','formatText','formBind','formItemCls','frame','grow','growMax','growMin','growToLongestValue','height','hidden','hiddenDataCls','hiddenName','hideEmptyLabel','hideLabel','hideMode','hideTrigger','html','id','increment','inputAttrTpl','inputId','inputMask','inputType','inputWrapCls','invalidCls','invalidText','isTextInput','itemId','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelPad','labelSeparator','labelStyle','labelWidth','liquidLayout','listConfig','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maskRe','matchFieldWidth','maxHeight','maxLength','maxLengthText','maxText','maxValue','maxWidth','minChars','minHeight','minLength','minLengthText','minText','minValue','minWidth','modal','modelValidation','msgTarget','undefined','name','nameable','openCls','overCls','undefined','undefined','padding','pageSize','pickerAlign','pickerMaxHeight','pickerOffset','undefined','plugins','preventMark','publishes','queryCaching','queryDelay','queryMode','queryParam','readOnly','readOnlyCls','reference','regex','regexText','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeatTriggerClick','requiredCls','resizable','resizeHandles','saveDelay','scrollable','selection','selectOnFocus','selectOnTab','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','undefined','snapToIncrement','stateEvents','stateful','stateId','store','stripCharsRe','style','submitFormat','submitValue','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','transform','transformInPlace','triggerAction','triggerCls','triggers','triggerWrapCls','twoWayBindable','typeAhead','typeAheadDelay','ui','uiCls','userCls','validateBlank','validateOnBlur','validateOnChange','validateOnFocusLeave','validation','validationField','validator','value','valueField','valueNotFoundText','valuePublishEvent','viewModel','vtype','vtypeText','weight','width','xtype',],
            (new EWCTimefield()).events,
            ['ready','activate','added','afterlayoutanimation','afterrender','autosize','beforeactivate','beforedeactivate','beforedeselect','beforedestroy','beforehide','beforequery','beforerender','beforeselect','beforeshow','beforestaterestore','beforestatesave','blur','boxready','change','collapse','deactivate','destroy','dirtychange','disable','enable','errorchange','expand','focus','focusenter','focusleave','hide','keydown','keypress','keyup','move','paste','removed','render','resize','select','show','specialkey','staterestore','statesave','validitychange','writeablechange',],
            vc
        )
        this.xtype = 'timefield'
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

//var events = (new EWCTimefield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
