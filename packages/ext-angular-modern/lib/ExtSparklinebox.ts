//import EWCSparklinebox from '../dist/ext-sparklinebox.component.js';
//inputs: (new EWCSparklinebox()).properties,
//import EWCSparklinebox from '@sencha/ext-web-components-modern/dist/ext-sparklinebox.component.js';
import { EWCSparklinebox } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtSparklinebox',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','boxFillColor','boxLineColor','centered','chartRangeMax','chartRangeMin','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','disableTooltips','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightColor','highlightLighten','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','lineColor','listeners','margin','maxHeight','maxWidth','medianColor','minHeight','minWidth','modal','modelValidation','name','nameable','outlierFillColor','outlierIQR','outlierLineColor','padding','plugins','publishes','raw','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showOutliers','spotRadius','stateful','statefulDefaults','stateId','style','tabIndex','target','targetColor','tipTpl','toFrontOnShow','tooltip','tooltipPrefix','tooltipSkipNull','tooltipSuffix','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','values','viewModel','weight','whiskerColor','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklineboxComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklineboxComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','boxFillColor','boxLineColor','centered','chartRangeMax','chartRangeMin','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','disableTooltips','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightColor','highlightLighten','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','lineColor','listeners','margin','maxHeight','maxWidth','medianColor','minHeight','minWidth','modal','modelValidation','name','nameable','outlierFillColor','outlierIQR','outlierLineColor','padding','plugins','publishes','raw','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showOutliers','spotRadius','stateful','statefulDefaults','stateId','style','tabIndex','target','targetColor','tipTpl','toFrontOnShow','tooltip','tooltipPrefix','tooltipSkipNull','tooltipSuffix','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','values','viewModel','weight','whiskerColor','width','x','xtype','y','zIndex',],
            (new EWCSparklinebox()).events,
            ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'sparklinebox'
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

//var events = (new EWCSparklinebox()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
