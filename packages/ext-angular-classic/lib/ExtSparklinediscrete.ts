//import EWCSparklinediscrete from '../dist/ext-sparklinediscrete.component.js';
//inputs: (new EWCSparklinediscrete()).properties,
//import EWCSparklinediscrete from '@sencha/ext-web-components-classic/dist/ext-sparklinediscrete.component.js';
import { EWCSparklinediscrete } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtSparklinediscrete',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','chartRangeClip','chartRangeMax','chartRangeMin','cls','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','lineHeight','listeners','margin','name','nameable','plugins','publishes','reference','renderTo','ripple','session','shareableName','style','thresholdColor','thresholdValue','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinediscreteComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklinediscreteComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','chartRangeClip','chartRangeMax','chartRangeMin','cls','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','lineHeight','listeners','margin','name','nameable','plugins','publishes','reference','renderTo','ripple','session','shareableName','style','thresholdColor','thresholdValue','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width',],
            (new EWCSparklinediscrete()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'sparklinediscrete'
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

//var events = (new EWCSparklinediscrete()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
