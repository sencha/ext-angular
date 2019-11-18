//import EWCCheckcolumn from '../dist/ext-checkcolumn.component.js';
//inputs: (new EWCCheckcolumn()).properties,
import EWCCheckcolumn from '@sencha/ext-web-components/dist/ext-checkcolumn.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtCheckcolumn',
    inputs: ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','align','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','cell','centered','cls','columns','computedWidth','constrainAlign','contentEl','control','controller','data','dataIndex','defaultColumnUI','defaultEditor','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','defaultWidth','depends','disabled','displayed','docked','draggable','editable','editor','editorDefaults','undefined','undefined','undefined','exportRenderer','exportStyle','exportSummaryRenderer','filter','flex','floated','focusableContainer','focusCls','formatter','fullscreen','groupable','grouper','groupHeaderTpl','headerCheckbox','headerCheckboxAlign','height','hidden','hideable','hideAnimation','hideMode','hideOnMaskTap','hideShowMenuItem','html','id','ignore','ignoreExport','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','locked','manageBorders','margin','masked','maxHeight','maxWidth','menu','menuDisabled','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderer','renderTo','reserveScrollbar','resetFocusPosition','resizable','right','ripple','scope','scratchCell','scrollable','session','shadow','shareableName','shim','showAnimation','sortable','sorter','stateful','statefulDefaults','stateId','stopSelection','style','summary','summaryCell','summaryDataIndex','summaryFormatter','summaryRenderer','undefined','tabIndex','text','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','verticalOverflow','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecheckchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','checkchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckcolumnComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCheckcolumnComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','align','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','cell','centered','cls','columns','computedWidth','constrainAlign','contentEl','control','controller','data','dataIndex','defaultColumnUI','defaultEditor','defaultFocus','defaultListenerScope','defaults','defaultToolWeights','defaultType','defaultWidth','depends','disabled','displayed','docked','draggable','editable','editor','editorDefaults','undefined','undefined','undefined','exportRenderer','exportStyle','exportSummaryRenderer','filter','flex','floated','focusableContainer','focusCls','formatter','fullscreen','groupable','grouper','groupHeaderTpl','headerCheckbox','headerCheckboxAlign','height','hidden','hideable','hideAnimation','hideMode','hideOnMaskTap','hideShowMenuItem','html','id','ignore','ignoreExport','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','locked','manageBorders','margin','masked','maxHeight','maxWidth','menu','menuDisabled','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderer','renderTo','reserveScrollbar','resetFocusPosition','resizable','right','ripple','scope','scratchCell','scrollable','session','shadow','shareableName','shim','showAnimation','sortable','sorter','stateful','statefulDefaults','stateId','stopSelection','style','summary','summaryCell','summaryDataIndex','summaryFormatter','summaryRenderer','undefined','tabIndex','text','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','verticalOverflow','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCCheckcolumn()).events,
            ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecheckchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','checkchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'checkcolumn'
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

//var events = (new EWCCheckcolumn()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
