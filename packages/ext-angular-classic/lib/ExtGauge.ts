//import EWCGauge from '../dist/ext-gauge.component.js';
//inputs: (new EWCGauge()).properties,
//import EWCGauge from '@sencha/ext-web-components-classic/dist/ext-gauge.component.js';
import { EWCGauge } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtGauge',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','angleOffset','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clockwise','cls','controller','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','maxValue','minValue','name','nameable','needle','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','style','textAlign','textOffset','textTpl','touchAction','trackLength','trackStart','trackStyle','twoWayBindable','ui','userCls','value','valueStyle','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGaugeComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtGaugeComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','angleOffset','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clockwise','cls','controller','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','maxValue','minValue','name','nameable','needle','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','style','textAlign','textOffset','textTpl','touchAction','trackLength','trackStart','trackStyle','twoWayBindable','ui','userCls','value','valueStyle','viewModel','width',],
            (new EWCGauge()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'gauge'
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

//var events = (new EWCGauge()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
