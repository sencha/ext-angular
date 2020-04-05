//import EWCDatefield from '../dist/ext-datefield.component.js';
//inputs: (new EWCDatefield()).properties,
//import EWCDatefield from '@sencha/ext-web-components-modern/dist/ext-datefield.component.js';
import { EWCDatefield } from '@sencha/ext-web-components-modern';
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
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alignTarget','altFormats','alwaysOnTop','animateUnderline','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCapitalize','autoComplete','autoCorrect','autoFitErrors','autoHideInputMask','axisLock','badFormatMessage','bind','bodyAlign','border','bottom','bubbleDirty','centered','clearable','cls','constrainAlign','contentEl','controller','data','dataType','dateFormat','defaultListenerScope','destroyPickerOnHide','dirty','disabled','displayed','docked','draggable','edgePicker','editable','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','floatedPicker','floatedPickerAlign','focusCls','focusTrap','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','hideTrigger','html','id','inline','undefined','inputMask','inputType','inputValue','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelInPlaceholder','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','matchFieldWidth','maxDate','maxHeight','maxLength','maxWidth','minDate','minHeight','minWidth','modal','modelValidation','name','nameable','padding','parseValidator','pattern','picker','pickerSlotAlign','placeholder','undefined','plugins','publishes','readOnly','record','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','stripCharsRe','style','tabIndex','textAlign','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggers','twoWayBindable','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','action','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','clearicontap','click','collapse','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keydown','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
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
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alignTarget','altFormats','alwaysOnTop','animateUnderline','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCapitalize','autoComplete','autoCorrect','autoFitErrors','autoHideInputMask','axisLock','badFormatMessage','bind','bodyAlign','border','bottom','bubbleDirty','centered','clearable','cls','constrainAlign','contentEl','controller','data','dataType','dateFormat','defaultListenerScope','destroyPickerOnHide','dirty','disabled','displayed','docked','draggable','edgePicker','editable','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','floatedPicker','floatedPickerAlign','focusCls','focusTrap','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','hideTrigger','html','id','inline','undefined','inputMask','inputType','inputValue','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelInPlaceholder','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','matchFieldWidth','maxDate','maxHeight','maxLength','maxWidth','minDate','minHeight','minWidth','modal','modelValidation','name','nameable','padding','parseValidator','pattern','picker','pickerSlotAlign','placeholder','undefined','plugins','publishes','readOnly','record','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','stripCharsRe','style','tabIndex','textAlign','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggers','twoWayBindable','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCDatefield()).events,
            ['ready','created','action','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','clearicontap','click','collapse','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keydown','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
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
