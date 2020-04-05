//import EWCCalendar_timefield from '../dist/ext-calendar-timefield.component.js';
//inputs: (new EWCCalendar_timefield()).properties,
//import EWCCalendar_timefield from '@sencha/ext-web-components-modern/dist/ext-calendar-timefield.component.js';
import { EWCCalendar_timefield } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtCalendar_timefield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alignTarget','alwaysOnTop','animateUnderline','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCapitalize','autoComplete','autoCorrect','autoFitErrors','autoFocus','autoFocusLast','autoHideInputMask','autoLoadOnValue','autoSelect','axisLock','badFormatMessage','bind','bodyAlign','border','bottom','bubbleDirty','centered','chipView','clearable','cls','collapseOnSelect','constrainAlign','contentEl','controller','data','dataType','defaultListenerScope','delimiter','dirty','disabled','displayed','displayField','displayTpl','docked','draggable','edgePicker','editable','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','floatedPicker','floatedPickerAlign','focusCls','focusTrap','forceSelection','fullscreen','height','hidden','hiddenName','hideAnimation','hideMode','hideOnMaskTap','hideTrigger','html','id','inline','undefined','inputMask','inputType','inputValue','instanceCls','itemCls','itemId','itemTpl','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelInPlaceholder','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','matchFieldWidth','maxHeight','maxLength','maxWidth','minHeight','minWidth','modal','modelValidation','multiSelect','name','nameable','options','padding','parseValidator','pattern','picker','pickerSlotAlign','placeholder','undefined','plugins','publishes','readOnly','record','recordCreator','recordCreatorScope','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','selection','selectOnTab','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','store','stripCharsRe','style','tabIndex','textAlign','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggers','twoWayBindable','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','valueCollection','valueField','valueNotFoundText','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','action','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','clearicontap','click','collapse','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keydown','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','positionedchange','removed','resize','rightchange','scrollablechange','select','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_timefieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_timefieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alignTarget','alwaysOnTop','animateUnderline','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCapitalize','autoComplete','autoCorrect','autoFitErrors','autoFocus','autoFocusLast','autoHideInputMask','autoLoadOnValue','autoSelect','axisLock','badFormatMessage','bind','bodyAlign','border','bottom','bubbleDirty','centered','chipView','clearable','cls','collapseOnSelect','constrainAlign','contentEl','controller','data','dataType','defaultListenerScope','delimiter','dirty','disabled','displayed','displayField','displayTpl','docked','draggable','edgePicker','editable','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','floatedPicker','floatedPickerAlign','focusCls','focusTrap','forceSelection','fullscreen','height','hidden','hiddenName','hideAnimation','hideMode','hideOnMaskTap','hideTrigger','html','id','inline','undefined','inputMask','inputType','inputValue','instanceCls','itemCls','itemId','itemTpl','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelInPlaceholder','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','matchFieldWidth','maxHeight','maxLength','maxWidth','minHeight','minWidth','modal','modelValidation','multiSelect','name','nameable','options','padding','parseValidator','pattern','picker','pickerSlotAlign','placeholder','undefined','plugins','publishes','readOnly','record','recordCreator','recordCreatorScope','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','selection','selectOnTab','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','store','stripCharsRe','style','tabIndex','textAlign','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggers','twoWayBindable','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','valueCollection','valueField','valueNotFoundText','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCCalendar_timefield()).events,
            ['ready','created','action','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','clearicontap','click','collapse','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keydown','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','positionedchange','removed','resize','rightchange','scrollablechange','select','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'calendar-timefield'
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

//var events = (new EWCCalendar_timefield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
