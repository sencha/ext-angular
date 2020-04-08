//import EWCDatepicker from '../dist/ext-datepicker.component.js';
//inputs: (new EWCDatepicker()).properties,
//import EWCDatepicker from '@sencha/ext-web-components-classic/dist/ext-datepicker.component.js';
import { EWCDatepicker } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtDatepicker',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaDisabledDatesText','ariaDisabledDaysText','ariaLabel','ariaLabelledBy','ariaMaxText','ariaMinText','ariaTitle','ariaTitleDateFormat','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','undefined','defaultAlign','defaultListenerScope','defaultValue','disableAnim','disabled','disabledCellCls','disabledCls','disabledDates','disabledDatesRE','disabledDatesText','disabledDays','disabledDaysText','dock','draggable','fixed','flex','floating','focusCls','focusOnToFront','footerButtonUI','format','formBind','frame','handler','height','hidden','hideMode','html','id','itemId','keyMap','keyMapEnabled','keyMapTarget','keyNavConfig','liquidLayout','listeners','liveDrag','loader','longDayFormat','margin','maskDefaults','maskElement','maxDate','maxHeight','maxText','maxWidth','minDate','minHeight','minText','minWidth','modal','modelValidation','undefined','monthYearFormat','monthYearText','nameable','nextText','overCls','undefined','undefined','padding','plugins','prevText','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scope','scrollable','selectedCls','session','shadow','shadowOffset','shareableName','shim','showToday','shrinkWrap','startDay','stateEvents','stateful','stateId','style','tabIndex','todayText','todayTip','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','removed','render','resize','select','show','staterestore','statesave',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepickerComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDatepickerComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaDisabledDatesText','ariaDisabledDaysText','ariaLabel','ariaLabelledBy','ariaMaxText','ariaMinText','ariaTitle','ariaTitleDateFormat','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','undefined','defaultAlign','defaultListenerScope','defaultValue','disableAnim','disabled','disabledCellCls','disabledCls','disabledDates','disabledDatesRE','disabledDatesText','disabledDays','disabledDaysText','dock','draggable','fixed','flex','floating','focusCls','focusOnToFront','footerButtonUI','format','formBind','frame','handler','height','hidden','hideMode','html','id','itemId','keyMap','keyMapEnabled','keyMapTarget','keyNavConfig','liquidLayout','listeners','liveDrag','loader','longDayFormat','margin','maskDefaults','maskElement','maxDate','maxHeight','maxText','maxWidth','minDate','minHeight','minText','minWidth','modal','modelValidation','undefined','monthYearFormat','monthYearText','nameable','nextText','overCls','undefined','undefined','padding','plugins','prevText','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scope','scrollable','selectedCls','session','shadow','shadowOffset','shareableName','shim','showToday','shrinkWrap','startDay','stateEvents','stateful','stateId','style','tabIndex','todayText','todayTip','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCDatepicker()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','removed','render','resize','select','show','staterestore','statesave',],
            vc
        )
        this.xtype = 'datepicker'
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

//var events = (new EWCDatepicker()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
