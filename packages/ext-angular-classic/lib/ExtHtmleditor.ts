//import EWCHtmleditor from '../dist/ext-htmleditor.component.js';
//inputs: (new EWCHtmleditor()).properties,
//import EWCHtmleditor from '@sencha/ext-web-components-classic/dist/ext-htmleditor.component.js';
import { EWCHtmleditor } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtHtmleditor',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeError','activeErrorsTpl','activeItem','afterBodyEl','afterIFrameTpl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','afterTextAreaTpl','alignOnScroll','alignTarget','allowDomMove','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoCreate','autoDestroy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeIFrameTpl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','beforeTextAreaTpl','bind','border','bubbleEvents','buttonDefaults','childEls','cls','columnWidth','combineErrors','combineLabels','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','createLinkText','data','defaultAlign','defaultButtonUI','defaultFocus','defaultLinkValue','defaultListenerScope','defaults','defaultType','defaultValue','detachOnRemove','disabled','disabledCls','dock','draggable','enableAlignments','enableColors','enableFont','enableFontSize','enableFormat','enableLinks','enableLists','enableSourceEdit','errorMsgCls','fieldBodyCls','fieldCls','fieldDefaults','fieldLabel','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','fontFamilies','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','id','iframeAttrTpl','inactiveChildTabIndex','inputType','invalidCls','invalidText','itemId','items','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelConnector','labelPad','labelSeparator','labelStyle','labelWidth','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','msgTarget','name','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','preventMark','publishes','readOnly','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnChange','validation','validationField','value','valuePublishEvent','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforepush','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','beforesync','blur','boxready','change','childmove','deactivate','destroy','dirtychange','disable','editmodechange','enable','errorchange','fielderrorchange','fieldvaliditychange','focus','focusenter','focusleave','hide','initialize','move','push','remove','removed','render','resize','show','specialkey','staterestore','statesave','sync','validitychange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtHtmleditorComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtHtmleditorComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeError','activeErrorsTpl','activeItem','afterBodyEl','afterIFrameTpl','afterLabelTextTpl','afterLabelTpl','afterSubTpl','afterTextAreaTpl','alignOnScroll','alignTarget','allowDomMove','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaErrorText','ariaHelp','ariaLabel','ariaLabelledBy','autoCreate','autoDestroy','autoEl','autoFitErrors','autoRender','undefined','autoShow','baseBodyCls','baseCls','beforeBodyEl','beforeIFrameTpl','beforeLabelTextTpl','beforeLabelTpl','beforeSubTpl','beforeTextAreaTpl','bind','border','bubbleEvents','buttonDefaults','childEls','cls','columnWidth','combineErrors','combineLabels','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','createLinkText','data','defaultAlign','defaultButtonUI','defaultFocus','defaultLinkValue','defaultListenerScope','defaults','defaultType','defaultValue','detachOnRemove','disabled','disabledCls','dock','draggable','enableAlignments','enableColors','enableFont','enableFontSize','enableFormat','enableLinks','enableLists','enableSourceEdit','errorMsgCls','fieldBodyCls','fieldCls','fieldDefaults','fieldLabel','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','fontFamilies','formBind','formItemCls','frame','height','hidden','hideEmptyLabel','hideLabel','hideMode','html','id','iframeAttrTpl','inactiveChildTabIndex','inputType','invalidCls','invalidText','itemId','items','keyMap','keyMapEnabled','keyMapTarget','labelableRenderTpl','labelAlign','labelAttrTpl','labelCls','labelClsExtra','labelConnector','labelPad','labelSeparator','labelStyle','labelWidth','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','msgTarget','name','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','preventMark','publishes','readOnly','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','submitValue','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','validateOnChange','validation','validationField','value','valuePublishEvent','viewModel','weight','width','xtype',],
            (new EWCHtmleditor()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforepush','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','beforesync','blur','boxready','change','childmove','deactivate','destroy','dirtychange','disable','editmodechange','enable','errorchange','fielderrorchange','fieldvaliditychange','focus','focusenter','focusleave','hide','initialize','move','push','remove','removed','render','resize','show','specialkey','staterestore','statesave','sync','validitychange',],
            vc
        )
        this.xtype = 'htmleditor'
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

//var events = (new EWCHtmleditor()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
