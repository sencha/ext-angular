//import EWCD3 from '../dist/ext-d3.component.js';
//inputs: (new EWCD3()).properties,
//import EWCD3 from '@sencha/ext-web-components-classic/dist/ext-d3.component.js';
import { EWCD3 } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtD3',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','cls','componentCls','controller','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','size','store','style','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','sceneresize','scenesetup','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3Component)}],
    template: '<ng-content></ng-content>'
})
export class ExtD3Component extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','cls','componentCls','controller','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','size','store','style','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width',],
            (new EWCD3()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','sceneresize','scenesetup','widthchange',],
            vc
        )
        this.xtype = 'd3'
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

//var events = (new EWCD3()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
