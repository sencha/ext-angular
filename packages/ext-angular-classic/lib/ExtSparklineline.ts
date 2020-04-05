//import EWCSparklineline from '../dist/ext-sparklineline.component.js';
//inputs: (new EWCSparklineline()).properties,
//import EWCSparklineline from '@sencha/ext-web-components-classic/dist/ext-sparklineline.component.js';
import { EWCSparklineline } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtSparklineline',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','chartRangeMax','chartRangeMaxX','chartRangeMin','chartRangeMinX','cls','controller','defaultListenerScope','disabled','disableTooltips','drawNormalOnTop','undefined','fillColor','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','highlightLineColor','highlightSpotColor','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','lineWidth','listeners','margin','maxSpotColor','minSpotColor','name','nameable','normalRangeColor','normalRangeMax','normalRangeMin','plugins','publishes','reference','renderTo','ripple','session','shareableName','spotColor','spotRadius','style','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','valueSpots','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinelineComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklinelineComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','chartRangeMax','chartRangeMaxX','chartRangeMin','chartRangeMinX','cls','controller','defaultListenerScope','disabled','disableTooltips','drawNormalOnTop','undefined','fillColor','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','highlightLineColor','highlightSpotColor','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','lineWidth','listeners','margin','maxSpotColor','minSpotColor','name','nameable','normalRangeColor','normalRangeMax','normalRangeMin','plugins','publishes','reference','renderTo','ripple','session','shareableName','spotColor','spotRadius','style','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','valueSpots','viewModel','width',],
            (new EWCSparklineline()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'sparklineline'
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

//var events = (new EWCSparklineline()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
